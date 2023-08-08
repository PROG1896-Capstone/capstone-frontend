import Link from "next/link";
import Image from "next/image";
import iconInstagram from "@/assets/icon-instagram.svg";
import iconFacebook from "@/assets/icon-facebook.svg";
import iconTwitter from "@/assets/icon-twitter.svg";
import iconYouTube from "@/assets/icon-youtube.svg";
import styles from "./footer.module.css";

export const Footer = () => {
  const footerIcons = [
    { src: iconInstagram, alt: "icon-instagram" },
    { src: iconFacebook, alt: "icon-facebook" },
    { src: iconTwitter, alt: "icon-twitter" },
    { src: iconYouTube, alt: "icon-youtube" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          TM & Copyright 2023 Sunset Bistro. All Rights Reserved.
        </p>
        <div className={styles.icons}>
          {footerIcons.map((icon) => (
            <Image
              className={styles.icon}
              src={icon.src}
              alt={icon.alt}
              key={`footer_${icon.alt}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
