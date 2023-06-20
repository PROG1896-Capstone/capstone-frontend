const getMenuItems = async (menuItemId) => {
  try {
    if (!menuItemId) {
      console.log("Throw item not found error or return null");
    }
    console.log("select menu item by Id");
    if ("not found") {
      console.log("Throw item not found error or return null");
    }
    return;
  } catch (error) {}
};

const getAllMenuItems = async () => {
  try {
    console.log("select all menu items"); 
    if ("not found") {
      console.log("Throw item not found error or return null");
    }

    return;
  } catch (error) {}
};

const createMenuItem = async (name, desc, price,category) => {
  try {
    if ("not found") {
      console.log("Throw item not found error or return null");
    }
    console.log("select all menu items");
    return;
  } catch (error) {}
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
  getMenuItems,
  getAllMenuItems,
  createMenuItem,
  deleteMenuItem
  
}