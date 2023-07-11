import { NextResponse } from "next/server"
import {menuItemService} from "./menuItemService"


export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const itemId = searchParams.get('itemId')
  if (!itemId){
    const menuItems = await menuItemService.getAllMenuItems()
    return NextResponse.json({ "data": menuItems })
  }
  const menuItem = await menuItemService.getMenuItem(itemId)
  return NextResponse.json({ "data": menuItem })
}

export async function DELETE() {
  return NextResponse.json({ "message": 'Delete Items' })
}

export async function PATCH(request) {
  const data = await request.json()
  const updateItem = await menuItemService.updateMenuItem(data.id, data.name, data.description, data.Price, data.categoryGroup)
  return NextResponse.json({ "updated": updateItem })
}

export async function POST(request) {
  const data = await request.json()
  const newItem = await menuItemService.createMenuItem(data.name, data.description, data.price, data.categoryGroup)
  console.log(newItem)
  
  return NextResponse.json({ "message": 'Create Items' })
}