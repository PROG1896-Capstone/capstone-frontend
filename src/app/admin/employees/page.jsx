"use client";
import { useState } from "react";
import EmployeeInfo from "@/components/EmployeeInfo/EmployeeInfo";
import styles from "./employees.module.css";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Employee Name 1",
      email: "test@email.com",
      role: "administrator",
      active: true,
    },
    {
      id: 2,
      name: "Employee Name 2",
      email: "test@email.com",
      role: "administrator",
      active: true,
    },
    {
      id: 3,
      name: "Employee Name 3",
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

  const removeItem = (id) => {
    const items = employees;
    const result = items.filter((item) => item.id !== id);
    setEmployees(result);
  };

  const [employeeKey, setEmployeeKey] = useState(2000);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeRole, setEmployeeRole] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: employeeKey,
      name: employeeName,
      email: employeeEmail,
      role: employeeRole,
      active: true,
    };

    setEmployees([...employees, newEmployee]);
    setEmployeeKey(employeeKey + 1);
    setEmployeeName("");
    setEmployeeEmail("");
    setEmployeeRole("");
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
              remove={() => removeItem(employee.id)}
            />
          ))}
        </div>
        <button className={styles.btn}>Save</button>
      </div>
      <form className={styles.add_box} onSubmit={addEmployee}>
        <h4 className={styles.subheading}>Add Employee</h4>
        <input
          className={styles.input}
          id="employee_name"
          type="text"
          name="employee_name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Employee Name"
          required
        />
        <input
          className={styles.input}
          id="employee_email"
          type="email"
          name="employee_email"
          value={employeeEmail}
          onChange={(e) => setEmployeeEmail(e.target.value)}
          placeholder="Employee Email"
          required
        />
        <select
          className={styles.input}
          id="employee_role"
          name="employee_role"
          value={employeeRole}
          onChange={(e) => setEmployeeRole(e.target.value)}
          required
        >
          <option value="" disabled>
            Role Name
          </option>
          <option value="administrator">Administrator</option>
          <option value="user">User</option>
        </select>
        <input type="submit" className={styles.btn} value="Add Employee" />
      </form>
    </div>
  );
};

export default Employees;
