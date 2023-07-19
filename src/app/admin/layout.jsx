"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

export const AdminLayout = ({ children }) => {
  const tabs = [
    {
      href: "/admin/employees",
      label: "Employees",
    },
    {
      href: "/admin/menu",
      label: "Menu",
    },
  ];

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.tab_select}>
        {tabs.map((tab) => (
          <Link
            className={`${styles.tab} ${
              tab.href === currentPath && styles.selected_tab
            }`}
            href={tab.href}
            onClick={() => setCurrentPath(tab.href)}
            key={`admin_tab_${tab.label}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
