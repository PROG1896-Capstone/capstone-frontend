import { useEffect, useState } from "react";
import styles from "./previousOrder.module.css";

const PreviousOrder = ({ items }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    let newOrderItems = [];
    let newPrice = 0;

    items.map((item) => {
      fetch(`http://localhost:3000/api/menuItem?itemId=${item.menuItemId}`)
        .then((response) => response.json())
        .then((data) => {
          newOrderItems = [
            ...newOrderItems,
            <h4 className={styles.item} key={item.id}>
              {item.quantity}x {data.data.name}
            </h4>,
          ];
          setOrderItems(newOrderItems);

          newPrice += item.quantity * data.data.price;
          setOrderPrice(newPrice);
        })
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <div className={styles.items}>{orderItems}</div>
        <h4 className={styles.total}>Total: ${orderPrice}</h4>
      </div>
      <button className={styles.btn}>Reorder</button>
    </div>
  );
};

export default PreviousOrder;
