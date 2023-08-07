import { NextResponse } from "next/server";
import {userService} from "./userService"

export async function POST(request) {
  const data = await request.json()
  const newUser = await userService.registerUser(data.name, data.email, data.password)
  return NextResponse.json({"user": newUser})
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const password = searchParams.get('password')
    const user = await userService.signIn(email, password)
    return NextResponse.json({"data": user});  
  }
 catch (e) {
    return NextResponse.json({"error": e.message}, { status: 400 }); 
 }

}
