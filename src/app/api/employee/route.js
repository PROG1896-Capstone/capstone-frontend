import { NextResponse } from "next/server";
import { employeeService} from "./employeeService";

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (!email){
    const employees = await employeeService.getAllEmployee()
    return NextResponse.json({ "employee": employees })
  } 
  const employee = await employeeService.getEmployee(email)
  return NextResponse.json({ "employee": employee })
}

export async function DELETE() {
  const data = await request.json()
  const employee = await employeeService.updateEmployee(data.email, data.status)
  return NextResponse.json({ "employee": employee })

}

export async function PATCH(request) {

}

export async function POST(request) {
  const data = await request.json()
  const newEmployee = await employeeService.createEmployee(data)
  return NextResponse.json({"newEmployee": newEmployee})

}