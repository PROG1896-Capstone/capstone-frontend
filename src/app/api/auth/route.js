import { NextResponse } from "next/server"
import { userService } from "./authService";


export async function POST(request) {
  const data = await request.json()
  const newUser = await userService.registerUser(data.name, data.email,data.password)
  // console.log(newUser)

  return NextResponse.json({ "newUser": newUser })
}

export async function GET(request) {
  // const data = await request.json()
  // await signIn(data.username, data.password)
  console.log("SIgn in")

  return NextResponse.json({ "message": "login in" })
} 