"use client";
import { useState, useEffect } from "react";
import CartItem from "@/components/CartItem/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [subtotal, setSubtotal] = useState(0);

  const addSubtotal = (value) => {
    const newSubtotal = parseInt(subtotal) + parseInt(value);

    setSubtotal(newSubtotal);
    localStorage.setItem("subtotal", JSON.stringify(newSubtotal));
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);

    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) setCartItems(items);

    const subtotal = JSON.parse(localStorage.getItem("subtotal"));
    if (subtotal) setSubtotal(subtotal);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.cart}>
          <h1 className={styles.heading}>Cart</h1>
          {cartItems.map((item) => (
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              savedQuantity={item.quantity}
              addSubtotal={addSubtotal}
              remove={() => removeItem(item.id)}
              key={`${item.id}_${item.name}`}
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
