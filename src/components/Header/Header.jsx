"use client";
import { useState } from "react";
import Image from "next/image";
import NavLinks from "./NavLinks/NavLinks";
import iconLogo from "@/assets/sunset-bistro-logo.png";
import iconMenuOpen from "@/assets/icon-menu-open.svg";
import iconMenuClose from "@/assets/icon-menu-close.svg";
import styles from "./header.module.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <Image
          className={styles.logo}
          src={iconLogo}
          alt="sunset-bistro-logo"
        />
        <Image
          className={styles.menu_icon}
          src={menuOpen ? iconMenuClose : iconMenuOpen}
          alt={menuOpen ? "icon-menu-close" : "icon-menu-open"}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <NavLinks className={styles.desktop_links} />
      {menuOpen && <NavLinks className={styles.mobile_links} />}
    </header>
  );
};

export default Header;
