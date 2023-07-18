import { useState } from "react";
import Image from "next/image";
import iconMenuClose from "@/assets/icon-menu-close.svg";
import styles from "./cartItem.module.css";

const CartItem = ({ name, price, addSubtotal, remove }) => {
  const [quantity, setQuantity] = useState(1);

  const subtractQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
      addSubtotal(0 - price);
    }
  };

  const addQuantity = () => {
    if (quantity !== 9) {
      setQuantity(quantity + 1);
      addSubtotal(price);
    }
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
