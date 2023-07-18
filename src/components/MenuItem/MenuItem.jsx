import styles from "./menuItem.module.css";
import Image from "next/image";

export const MenuItem = ({ imgSrc, imgAlt, name, description, price }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src={imgSrc} alt={imgAlt} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <h4 className={styles.price}>${price}</h4>
    </div>
  );
};

export default MenuItem;
