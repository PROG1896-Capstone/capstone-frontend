import styles from "./employeeInfo.module.css";

const EmployeeInfo = ({ employeeData, updateEmployees }) => {
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
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={info.active}
        onChange={(e) => {
          info.active = e.target.value;
          updateEmployees(info);
        }}
      />
    </div>
  );
};

export default EmployeeInfo;
