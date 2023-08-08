import {orderService} from "./orderService"
import { NextResponse } from "next/server"

export async function POST(request) {
  const data = await request.json()
  const newOrder = await orderService.createOrder(data)
  console.log(newOrder)
  return NextResponse.json({ "order": newOrder })
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const orderId = searchParams.get('orderId')
  const userId = searchParams.get('userId')
  if (userId){
    const userOrders = await orderService.getAllUserOrders(userId)
    return NextResponse.json({ "order": userOrders })
  }
  const order = await orderService.getOrder(orderId)
  return NextResponse.json({ "data": order })
}

export async function PATCH(request){
  const data = await request.json()
  const updateStatus = await orderService.updateOrder(data.status)
  return NextResponse.json({"status updated": updateStatus})
}