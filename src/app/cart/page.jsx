"use client";
import { useState } from "react";
import CartItem from "@/components/CartItem/CartItem";
import styles from "./cart.module.css";
import imgMenuItem from "@/assets/img-menu-item.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      name: "Lorem Ipsum 1",
      price: 12,
    },
    {
      id: 2,
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      name: "Lorem Ipsum 2",
      price: 12,
    },
    {
      id: 3,
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      name: "Lorem Ipsum 3",
      price: 12,
    },
  ]);

  const removeItem = (index) => {
    let items = cartItems;
    const firstSlice = items.slice(0, index);
    const secondSlice = items.slice(index + 1);
    const result = firstSlice.concat(secondSlice);
    setCartItems(result);
  };

  return (
    <div className={styles.page}>
      <div className={styles.cart}>
        <h2 className={styles.heading}>Product Details</h2>
        <h2 className={styles.heading}>Quantity</h2>
        <h2 className={styles.heading}>Price</h2>
        <h2 className={styles.heading}>Total</h2>
        {cartItems.map((item, index) => (
          <CartItem
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            name={item.name}
            price={item.price}
            remove={() => removeItem(index)}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
