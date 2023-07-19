"use client";
import { useState } from "react";
import EmployeeInfo from "@/components/EmployeeInfo/EmployeeInfo";
import styles from "./employees.module.css";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Employee Name",
      email: "test@email.com",
      role: "administrator",
      active: true,
    },
    {
      id: 2,
      name: "Employee Name",
      email: "test@email.com",
      role: "administrator",
      active: true,
    },
    {
      id: 3,
      name: "Employee Name",
      email: "test@email.com",
      role: "user",
      active: false,
    },
  ]);

  const updateEmployees = (updatedEmployee, index) => {
    let updatedEmployees = [...employees];
    updatedEmployees[index] = updatedEmployee;
    setEmployees(updatedEmployees);
  };

  return (
    <div className={styles.page}>
      <div className={styles.table}>
        <h3 className={styles.heading}>Employee Name</h3>
        <h3 className={styles.heading}>Email Address</h3>
        <h3 className={styles.heading}>Role</h3>
        <h3 className={styles.heading}>Active</h3>
        <div className={styles.employees}>
          {employees.map((employee, index) => (
            <EmployeeInfo
              key={employee.id}
              employeeData={employee}
              updateEmployees={(updatedEmployee) =>
                updateEmployees(updatedEmployee, index)
              }
            />
          ))}
        </div>
        <button className={styles.btn}>Save</button>
      </div>
      <form className={styles.add_box}>
        <h4 className={styles.subheading}>Add Employee</h4>
        <input
          className={styles.input}
          id="employee_email"
          type="email"
          name="employee_email"
          placeholder="Employee Email"
        />
        <select
          className={styles.input}
          id="employee_role"
          name="employee_role"
          defaultValue=""
        >
          <option value="" disabled>
            Role Name
          </option>
          <option value="administrator">Administrator</option>
          <option value="user">User</option>
        </select>
        <button className={styles.btn}>Add Employee</button>
      </form>
    </div>
  );
};

export default Employees;
