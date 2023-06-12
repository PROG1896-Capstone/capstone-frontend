import imgHomeSubs from "@/assets/img-home-subs.png";
import imgHomeBurgers from "@/assets/img-home-burgers.png";
import styles from "./home.module.css";
import Image from "next/image";

export const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h1 className={styles.heading}>Sunset</h1>
          <h1 className={styles.heading} id={styles.title_second_part}>
            Bistro
          </h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat
          </p>
        </div>
        <div className={styles.column}>
          <Image className={styles.img} src={imgHomeSubs} alt="img-home-subs" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Image
            className={styles.img}
            src={imgHomeBurgers}
            alt="img-home-burgers"
          />
        </div>
        <div className={styles.column}>
          <h1 className={styles.heading}>Hungry?</h1>
          <p className={styles.large_paragraph}>
            Once you try it, you will love it.
          </p>
          <button className={styles.btn}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
