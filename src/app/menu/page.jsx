"use client";
import { useState, useEffect } from "react";
import MenuItem from "@/components/MenuItem/MenuItem";
import styles from "./menu.module.css";
import imgMenuItem from "@/assets/img-menu-item.png";

export const Menu = () => {
  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menuItem")
      .then((response) => response.json())
      .then((data) => setMenuItems(data.data));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Select From Our Delicacies</h1>
        <div className={styles.items}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              imgSrc={imgMenuItem}
              imgAlt="img-menu-item"
              label={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
