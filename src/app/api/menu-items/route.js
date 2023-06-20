import { NextResponse } from "next/server"
import menuItemService from "../menu-items"

export async function GET() {
  return NextResponse.json({ "message": 'Get Menu Items' })
}

export async function DELETE() {
  return NextResponse.json({ "message": 'Delete Items' })
}

export async function UPDATE() {
  return NextResponse.json({ "message": 'Update Items' })
}

export async function POST() {
  return NextResponse.json({ "message": 'Create Items' })
}