"use client";
import { useState, useEffect } from "react";
import MenuItem from "@/components/MenuItem/MenuItem";
import styles from "./menu.module.css";

export const Menu = () => {
  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menuItem")
      .then((response) => response.json())
      .then((data) => setMenuItems(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  const getImgSrc = (itemName) => {
    let imgSrc = "/images/";
    imgSrc += itemName.toLowerCase().replaceAll(" ", "-");
    imgSrc += ".jpg";
    return imgSrc;
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Menu</h1>

        {menuItems.map((group) => (
          <div
            key={`${group.categoryGroup}_category_group`}
            className={styles.category}
          >
            <h2 className={styles.subheading}>{group.categoryGroup}</h2>
            {
              <div className={styles.items}>
                {group.data.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    imgSrc={getImgSrc(item.name)}
                    imgAlt="img-menu-item"
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
