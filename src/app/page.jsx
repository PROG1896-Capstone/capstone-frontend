import styles from "./home.module.css";
import Link from 'next/link'

export const Home = async () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading} id={styles.title}>
          Sunset Bistro
        </h1>
        <p className={styles.paragraph}>Once you try it, you will love it.</p>
        <Link href='/menu'><button className={styles.btn}>Order Now</button></Link>
      </div>
    </div>
  );
};

export default Home;
