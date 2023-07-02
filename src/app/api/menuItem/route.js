import { NextResponse } from "next/server"
import {menuItemService} from "./menuItemService"


export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const ItemId = searchParams.get('ItemId')
  if (!ItemId){
    const menuItems = await menuItemService.getAllMenuItems()
    return NextResponse.json({ "data": menuItems })
  }
  const menuItem = await menuItemService.getMenuItem(ItemId)
  return NextResponse.json({ "data": menuItem })
}

export async function DELETE() {
  return NextResponse.json({ "message": 'Delete Items' })
}

export async function PATCH(request) {
  const data = await request.json()
  const updateItem = await menuItemService.updateMenuItem(data.id,data.Name, data.Description, data.Price, data.CategoryGroup)
  return NextResponse.json({ "updated": updateItem })
}

export async function POST(request) {
  const data = await request.json()
  const newItem = await menuItemService.createMenuItem(data.Name, data.Description, data.Price, data.CategoryGroup)
  console.log(newItem)
  
  return NextResponse.json({ "message": 'Create Items' })
}