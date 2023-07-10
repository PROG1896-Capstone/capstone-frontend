import MenuItem from "@/components/MenuItem/MenuItem";
import styles from "./menu.module.css";
import imgMenuItem from "@/assets/img-menu-item.png";

export const Menu = () => {
  const menuItems = [
    {
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      label: "Lorem Ipsum",
    },
    {
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      label: "Lorem Ipsum",
    },
    {
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      label: "Lorem Ipsum",
    },
    {
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      label: "Lorem Ipsum",
    },
    {
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      label: "Lorem Ipsum",
    },
    {
      imgSrc: imgMenuItem,
      imgAlt: "img-menu-item",
      label: "Lorem Ipsum",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Select From Our Delicacies</h1>
        <div className={styles.items}>
          {menuItems.map((item) => (
            <MenuItem
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
