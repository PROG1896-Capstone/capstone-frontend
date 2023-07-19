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

  return (
    <div className={styles.layout}>
      <div className={styles.tab_select}>
        {tabs.map((tab) => (
          <Link
            className={styles.tab}
            href={tab.href}
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
