import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading} id={styles.title}>
          Sunset Bistro
        </h1>
        <p className={styles.paragraph}>Once you try it, you will love it.</p>
        <button className={styles.btn}>Order Now</button>
      </div>
    </div>
  );
};

export default Home;
