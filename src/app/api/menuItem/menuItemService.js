import prisma from "../../db/prisma";

const getMenuItem = async (menuItemId) => {
  try {
    if (!menuItemId) {
      console.log("A menu item id is required");
    }
    const menuItem = await prisma.menuItem.findFirst({
      where: {id: parseInt(menuItemId)}
    });
    if (!menuItem) {
      console.log("Item not found");
    }
    return menuItem;
  } catch (error) {
    console.error(error)
  }
};

const getAllMenuItems = async () => {
    try {
      const menuItems = await prisma.menuItem.findMany({
        select:{
        id: true,
        name: true,
        description:true,
        price: true,
        insertedAt: true,
        updatedAt:true}
      });
      return menuItems
    } catch (error) {
      console.error(error)
    }
};

const createMenuItem = async (name, desc, price,category) => {
  try {
    const menuItem = await prisma.menuItem.create({
      data:{
        name: name,
        description: desc,
        price: price,
        categoryGroup: category,
      }
    })
    return menuItem
  } catch (error) {
    console.error(error)
  }

};

const updateMenuItem = async (id, name, desc, price,category) => {
  try {
    const menuItem = await prisma.menuItem.update({
      where:{id: id},
      data:{
        name: name,
        description: desc,
        price: price,
        categoryGroup: category,
      }
    })
    return menuItem;
  } catch (error) {
    console.error(error)
  }
};


const deleteMenuItem = async (name, desc, price,category) => {
  try {
    if ("not found") {
      console.log("Throw item not found error or return null");
    }
    console.log("select all menu items");
    return;
  } catch (error) {}
};


export const menuItemService = {
  getMenuItem,
  getAllMenuItems,
  createMenuItem,
  deleteMenuItem,
  updateMenuItem
  
}