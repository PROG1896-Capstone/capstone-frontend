import prisma from "../../utils/prisma";

const createEmployee = async (employee) => {
  try {
    const newEmployee = await prisma.Employee.create({
      data: {
        position: employee.position,
        role: employee.role,
        user: {
          connect: {
            email: employee.email
          }
        },
      },
    });
    return newEmployee
  } catch (error) {
    console.error(error)
  }
};

const updateEmployee = async (data) => {
  try {
    const newEmployee = await prisma.Employee.update({
      data: data
      ,
    });
    return newEmployee
  } catch (error) {}
};

const getEmployee = async (email) => {
  try {
    const employee = await prisma.Employee.findFirst({
      where: {
        user: {
          email: email
        }
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
      }, 
    })
    return employee
  } catch (error) {
    console.log(error)
  }
};

export const employeeService ={
  createEmployee,
  getEmployee,
  updateEmployee
}

