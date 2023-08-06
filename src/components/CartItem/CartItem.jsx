import { useState } from "react";
import Image from "next/image";
import iconMenuClose from "@/assets/icon-menu-close.svg";
import styles from "./cartItem.module.css";

const CartItem = ({ id, name, price, savedQuantity, addSubtotal, remove }) => {
  const [quantity, setQuantity] = useState(savedQuantity);

  const saveCartItem = (newQuantity) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let newItems = cartItems.filter((item) => item.id !== id);

    let newItem = {};
    cartItems.map((item) => {
      if (item.id === id) {
        newItem = { id: id, name: name, price: price, quantity: newQuantity };
      }
    });
    newItems = [...newItems, newItem];

    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  const subtractQuantity = () => {
    let newQuantity = quantity;

    if (quantity !== 1) {
      newQuantity--;
      setQuantity(newQuantity);
      addSubtotal(0 - price);
    }

    saveCartItem(newQuantity);
  };

  const addQuantity = () => {
    let newQuantity = quantity;

    if (quantity !== 9) {
      newQuantity++;
      setQuantity(newQuantity);
      addSubtotal(price);
    }

    saveCartItem(newQuantity);
  };

  const handleRemove = () => {
    addSubtotal(0 - price * quantity);
    remove();
  };

  return (
    <div className={styles.item}>
      <div className={styles.top_container}>
        <h3 className={styles.name}>{name}</h3>
        <Image
          className={styles.remove_icon}
          src={iconMenuClose}
          alt="icon-remove"
          onClick={handleRemove}
        />
      </div>
      <p className={styles.note}>Order Note</p>
      <div className={styles.bottom_container}>
        <div className={styles.quantity}>
          <h4 className={styles.operator} onClick={subtractQuantity}>
            -
          </h4>
          <h4 className={styles.quantity_value}>{quantity}</h4>
          <h4 className={styles.operator} onClick={addQuantity}>
            +
          </h4>
        </div>
        <h4 className={styles.price}>${price * quantity}</h4>
      </div>
    </div>
  );
};

export default CartItem;
