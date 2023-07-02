import prisma from "../../db/prisma";

const createOrder = async (order) => {
  try {
    const newOrder = await prisma.Order.create({
      data: {
        User: {
          connect: {
            id: order.UserId
          }
        },
        OrderItems: {
          createMany: {
            data: [...order.OrderItems]
          },
        },
      },
    });
    return newOrder;
  } catch (error) {
    console.error(error);
  }
};

const getAllUserOrders = async(userId) =>{
  try {
    const order = await prisma.Order.findMany({
      where: {
        UserId: userId,
      },  
      include:{
        OrderItems:true
      }    
    })
    return order
  } catch (error) {
    console.error(error)
  }
}

const getOrder = async(orderId) =>{
  try {
    const order = await prisma.Order.findUnique({
      where: {
        id: parseInt(orderId),
      },  
      include:{
        OrderItems:true
      }    
    })
    return order
  } catch (error) {
    console.error(error)
  }

}

const updateOrder = async(orderId, updateStatus) => {
  try {
    const order = await prisma.Order.update({
      where:{id: orderId},
      data: {Status: updateStatus}
    })
    return order
  } catch (error) {
    
  }

}

export const orderService = {
  createOrder,
  getAllUserOrders,
  getOrder,
  updateOrder
};

