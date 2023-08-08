import Image from "next/image";
import imgAbout from "@/assets/img-about.png";
import styles from "./about.module.css";

export const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.img_container}></div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Story!</h1>
        <p className={styles.paragraph}>
        Welcome to Sunset Bistro - Where Dining Meets Tranquility! Nestled in breathtaking scenery, our bistro offers a culinary journey combining delectable dishes with the beauty of nature. 
        
        Our Story: Founded in 2005, Sunset Bistro is an escape from the hustle and bustle. Inspired by mesmerizing sunsets, we offer a place to savor delicious flavors and witness nature's magic. 
        Our Cuisine: Led by an innovative team, our diverse menu celebrates local and international flavors. From succulent seafood to vibrant vegetarian delights, we satisfy every palate. 
        Ambiance and Atmosphere: Step into our inviting space, tastefully designed to connect indoor and outdoor beauty. Enjoy stunning vistas on our charming patio. 
        Exceptional Service: Our attentive staff ensures an unforgettable experience, filled with warmth and hospitality. 
        Special Events: Celebrate life's moments with us. We offer private dining and personalized event planning.
        Join us at Sunset Bistro for a culinary adventure that soothes your soul. Witness breathtaking sunsets in our little corner of paradise. 
        </p>
      </div>
    </div>
  );
};

export default About;
