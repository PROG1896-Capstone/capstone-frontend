import styles from "./previousOrder.module.css";

const PreviousOrder = ({ items, price }) => {
  let itemKey = 1000;

  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <div className={styles.items}>
          {items.map((item) => (
            <h4 className={styles.item} key={itemKey++}>
              {item.quantity}x {item.name}
            </h4>
          ))}
        </div>
        <h4 className={styles.total}>Total: ${price}</h4>
      </div>
      <button className={styles.btn}>Reorder</button>
    </div>
  );
};

export default PreviousOrder;
