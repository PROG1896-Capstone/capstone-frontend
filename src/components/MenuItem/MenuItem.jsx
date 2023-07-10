import styles from "./menuItem.module.css";
import Image from "next/image";

export const MenuItem = ({ imgSrc, imgAlt, label }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src={imgSrc} alt={imgAlt} />
      <h3 className={styles.label}>{label}</h3>
    </div>
  );
};

export default MenuItem;
