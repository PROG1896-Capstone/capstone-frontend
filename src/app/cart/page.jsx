"use client";
import { useState } from "react";
import CartItem from "@/components/CartItem/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Lorem Ipsum 1",
      price: 12,
    },
    {
      id: 2,
      name: "Lorem Ipsum 2",
      price: 12,
    },
    {
      id: 3,
      name: "Lorem Ipsum 3",
      price: 12,
    },
  ]);

  const [subtotal, setSubtotal] = useState(36);

  const addSubtotal = (value) => {
    setSubtotal(subtotal + value);
  };

  const removeItem = (id) => {
    const items = cartItems;
    const result = items.filter((item) => item.id !== id);
    setCartItems(result);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.cart}>
          <h1 className={styles.heading}>Cart</h1>
          {cartItems.map((item, index) => (
            <CartItem
              name={item.name}
              price={item.price}
              addSubtotal={addSubtotal}
              remove={() => removeItem(item.id)}
              key={item.id}
            />
          ))}
        </div>
        <div className={styles.subtotal}>
          <h3 className={styles.subheading}>Subtotal: ${subtotal}</h3>
          <button className={styles.btn}>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
