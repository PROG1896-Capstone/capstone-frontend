import Image from "next/image";
import Link from "next/link";
import iconLogo from "@/assets/sunset-bistro-logo.png";
import iconCart from "@/assets/icon-cart.svg";
import iconAccount from "@/assets/icon-account.svg";
import styles from "./header.module.css";

export const Header = () => {
  const textLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/menu",
      label: "Menu",
    },
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/contact",
      label: "Contact Us",
    },
  ];

  const iconLinks = [
    {
      href: "/cart",
      label: <Image className={styles.icon} src={iconCart} alt="icon-cart" />,
    },
    {
      href: "/login",
      label: (
        <Image className={styles.icon} src={iconAccount} alt="icon-account" />
      ),
    },
  ];

  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={iconLogo} alt="sunset-bistro-logo" />
      <nav className={styles.nav}>
        <div className={styles.text_links}>
          {textLinks.map((link) => (
            <Link className={styles.link} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.icon_links}>
          {iconLinks.map((link) => (
            <Link className={styles.link} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
