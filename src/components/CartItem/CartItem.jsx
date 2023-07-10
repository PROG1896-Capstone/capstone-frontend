import { useState } from "react";
import Image from "next/image";
import styles from "./cartItem.module.css";

const CartItem = ({ imgSrc, imgAlt, name, price, remove }) => {
  const [quantity, setQuantity] = useState(1);

  const subtractQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const addQuantity = () => {
    if (quantity !== 9) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <Image className={styles.img} src={imgSrc} alt={imgAlt} />
        <div className={styles.container}>
          <h5 className={styles.text}>{name}</h5>
          <h5 className={styles.text}>Details</h5>
          <h5 className={styles.btn_text} onClick={remove}>
            Remove
          </h5>
        </div>
      </div>
      <div className={styles.quantity}>
        <h5 className={styles.operator} onClick={subtractQuantity}>
          -
        </h5>
        <h5 className={styles.value}>{quantity}</h5>
        <h5 className={styles.operator} onClick={addQuantity}>
          +
        </h5>
      </div>
      <h5 className={styles.value}>${price}</h5>
      <h5 className={styles.value}>${price * quantity}</h5>
    </div>
  );
};

export default CartItem;
