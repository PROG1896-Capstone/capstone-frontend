import { NextResponse } from "next/server";
import {userService} from "./userService"

export async function POST(request) {
  const data = await request.json()
  const newUser = await userService.registerUser(data.name, data.email, data.password)
  return NextResponse.json({"user": newUser})
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const user = await userService.getUser(id)
  return NextResponse.json({"user": user})
}
