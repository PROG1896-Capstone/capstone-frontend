import Image from "next/image";
import iconMenuClose from "@/assets/icon-menu-close.svg";
import styles from "./employeeInfo.module.css";

const EmployeeInfo = ({ employeeData, updateEmployees, remove }) => {
  let info = employeeData;

  return (
    <div className={styles.info}>
      <input
        className={styles.text}
        type="text"
        value={info.name}
        onChange={(e) => {
          info.name = e.target.value;
          updateEmployees(info);
        }}
      />
      <input
        className={styles.text}
        type="email"
        value={info.email}
        onChange={(e) => {
          info.email = e.target.value;
          updateEmployees(info);
        }}
      />
      <select
        className={styles.select}
        value={info.role}
        onChange={(e) => {
          info.role = e.target.value;
          updateEmployees(info);
        }}
      >
        <option value="administrator">Administrator</option>
        <option value="user">User</option>
      </select>
      <div className={styles.container}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={info.active}
          onChange={() => {
            info.active = !info.active;
            updateEmployees(info);
          }}
        />
        <Image
          className={styles.delete}
          src={iconMenuClose}
          alt="icon-close"
          onClick={remove}
        />
      </div>
    </div>
  );
};

export default EmployeeInfo;
