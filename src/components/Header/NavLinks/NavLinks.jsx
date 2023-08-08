import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import iconCart from "@/assets/icon-cart.svg";
import iconAccount from "@/assets/icon-account.svg";
import styles from "./navLinks.module.css";

const NavLinks = ({ className }) => {
  const textLinks = [
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
      key: "header_link_cart",
    },
    {
      href: "/login",
      label: (
        <Image className={styles.icon} src={iconAccount} alt="icon-account" />
      ),
      key: "header_link_login",
    },
  ];

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className={`${styles.nav} ${className}`}>
      <div className={styles.text_links}>
        {textLinks.map((link) => (
          <Link
            className={`${styles.link} ${
              link.href === currentPath && styles.selected_tab
            }`}
            href={link.href}
            onClick={() => setCurrentPath(link.href)}
            key={`header_link_${link.label}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.icon_links}>
        {iconLinks.map((link) => (
          <Link
            className={styles.link}
            href={link.href}
            onClick={() => setCurrentPath(link.href)}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
