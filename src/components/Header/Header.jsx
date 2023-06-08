import Image from "next/image";
import Link from "next/link";
import iconLogo from "@/assets/sunset-bistro-logo.jpeg";
import iconCart from "@/assets/icon-cart.svg";
import iconAccount from "@/assets/icon-account.svg";
import styles from "./header.module.css";

export const Header = () => {
  const headerLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/",
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
    {
      href: "/",
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
        {headerLinks.map((link) => (
          <Link className={styles.link} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
