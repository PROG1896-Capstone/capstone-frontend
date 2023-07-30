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
  const formData = await request.formData();
  const updateItem = await menuItemService.updateMenuItem(formData.get('id'), formData.get('name'), formData.get('description'), formData.get('price'), formData.get('categoryGroup'),formData.get('image'))
  console.log(updateItem)
  return NextResponse.json({ "message": updateItem })
}

export async function POST(request) {
  const formData = await request.formData();
  // console.log(formData.get('name'))
  const newItem = await menuItemService.createMenuItem(formData.get('name'), formData.get('description'), formData.get('price'), formData.get('categoryGroup'),  formData.get('image'))
  return NextResponse.json({ "message": newItem})
}