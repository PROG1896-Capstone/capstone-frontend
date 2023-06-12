import Image from "next/image";
import imgAbout from "@/assets/img-about.png";
import styles from "./about.module.css";

export const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <Image className={styles.img} src={imgAbout} alt="img-about" />
      </div>
      <div className={styles.column}>
        <h1 className={styles.heading}>Our Story!</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat
        </p>
      </div>
    </div>
  );
};

export default About;
