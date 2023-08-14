import prisma from "../../utils/prisma";
import { writeFile } from "fs/promises";
import path from "path";

const imageExtensions = ["image/jpg", "image/png", "image/jpeg"];
const imageDir = "/images";

const saveImage = async (image, filename) => {  
  const imageExt = image.type.split("/").pop();
  const imageName = `${Date.now()}-${filename.toLowerCase().replace(" ", "-")}.${imageExt}`;
  console.log(imageName)
  try {
    if (!imageExtensions.includes(image.type)) {
      return { error: "Not an image!" };
    }
    if (parseInt(image.size) > 15728640) {
      return { error: "Image is too large!" };
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const imagePath = path.join(process.cwd(),'/public', imageDir, imageName);
    await writeFile(imagePath, buffer);
    return imageName;
  } catch (error) {
    return error;
  }
};

const getMenuItem = async (menuItemId) => {
  try {
    if (!menuItemId) {
      return { error: "A menu item id is required" };
    }
    const menuItem = await prisma.menuItem.findFirst({
      where: { id: parseInt(menuItemId) },
    });
    if (!menuItem) {
      return { error: "Item not found" };
    }
    return menuItem;
  } catch (error) {
    return error;
  }
};

const getAllMenuItems = async () => {
  try {
    const menuGroup = await prisma.menuItem.groupBy({
      by: ["categoryGroup"],
    });
    const menuItems = await prisma.menuItem.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        categoryGroup: true,
        price: true,
        image: true,
        insertedAt: true,
        updatedAt: true,
      },
    });
    menuGroup.map((group) => {
      group.data = [];
    });
    for (let i in menuItems) {
      for (let g in menuGroup) {
        if (menuGroup[g].categoryGroup == menuItems[i].categoryGroup) {
          menuGroup[g].data.push(menuItems[i]);
        }
      }
    }
    return menuGroup;
  } catch (error) {
    return error;
  }
};

const createMenuItem = async (name, desc, price, category, imageName) => {
  try {
    // const filename = await saveImage(image, name)
    const menuItem = await prisma.menuItem.create({
      data: {
        name: name,
        description: desc,
        price: price,
        categoryGroup: category,
        image: `${imageDir}/${imageName}`
        //image: `${imageDir}/${imageName}`,
      },
    });
    return menuItem;
  } catch (error) {
    return error;
  }
};

const updateMenuItem = async (id, name, desc, price, category, file) => {
  try {
    const filename = await saveImage(file, name)
    const menuItem = await prisma.menuItem.update({
      where: { id: parseInt(id) },
      data: {
        name: name,
        description: desc,
        price: price,
        categoryGroup: category,
        image: `${imageDir}/${filename}`
        //image: `${imageDir}/${imageName}`,
      },
    });
    return menuItem;
  } catch (error) {
    return error;
  }
};
//TODO: Implement this
const deleteMenuItem = async (menuItemId) => {
  try {
    if (!menuItemId) {
      console.log("no id");
    }
    const menuItem = await prisma.menuItem.findFirst({
      where: { id: parseInt(menuItemId) },
    });

    if (menuItem) {
      return await prisma.menuItem.update({
        where: { id: parseInt(menuItemId) },
        data: {
          active: false,
        },
      });
    }
  } catch (error) {}
};

export const menuItemService = {
  getMenuItem,
  getAllMenuItems,
  createMenuItem,
  deleteMenuItem,
  updateMenuItem,
  saveImage,
};
