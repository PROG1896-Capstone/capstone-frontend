import prisma from "../../utils/prisma";

const createOrder = async (order) => {
  try {
    if (!order){
      return {error: ""}
    }
    const newOrder = await prisma.Order.create({
      data: {
        User: {
          connect: {
            id: order.UserId
          }
        },
        orderItems: {
          createMany: {
            data: [...order.orderItems]
          },
        },
      },
    });
    return newOrder;
  } catch (error) {
    return error;
  }
};

const getAllUserOrders = async(userId) =>{
  try {
    const order = await prisma.Order.findMany({
      where: {
        userId: userId,
      },  
      include:{
        orderItems:true
      }    
    })
    return order
  } catch (error) {
    return error;
  }
}

const getOrder = async(orderId) =>{
  try {
    const order = await prisma.Order.findUnique({
      where: {
        id: parseInt(orderId),
      },  
      include:{
        orderItems:true
      }    
    })
    return order
  } catch (error) {
    return error;
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
    return error;
  }

}

export const orderService = {
  createOrder,
  getAllUserOrders,
  getOrder,
  updateOrder
};

