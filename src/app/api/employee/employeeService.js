import prisma from "../../utils/prisma";

const createEmployee = async (employee) => {
  try {
    const newEmployee = await prisma.Employee.create({
      data: {
        position: employee.position,
        role: employee.role,
        user: {
          connect: {
            email: employee.email,
          },
        },
      },
    });
    return newEmployee;
  } catch (error) {
    if (error.code == "P2025"){
     throw new Error("User with the email doesn't exist");

    }
  }
};

const updateEmployee = async (data) => {
  try {
    const newEmployee = await prisma.Employee.update({
      data: data,
    });
    return newEmployee;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getEmployee = async (email) => {
  try {
    const employee = await prisma.Employee.findFirst({
      where: {
        user: {
          email: email,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    return employee;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllEmployee = async () => {
  try {
    const employees = await prisma.Employee.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    return employees;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//TODO: create getAllEmployees Route
//TODO: Consider deleting an employee (You don't have to)
export const employeeService = {
  createEmployee,
  getEmployee,
  updateEmployee,
  getAllEmployee,
};
