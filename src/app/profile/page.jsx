"use client";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import PreviousOrder from "@/components/PreviousOrder/PreviousOrder";
import styles from "./profile.module.css";

const Profile = () => {
  const [orders, setOrders] = useState([]);

  const [updateMode, setUpdateMode] = useState(false);

  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");

  const getOrders = async () => {
    const session = await getSession();

    session &&
      fetch(`http://localhost:3000/api/order?userId=${session.user.id}`)
        .then((response) => response.json())
        .then((data) => setOrders(data.order))
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.info}>
        <h1 className={styles.heading}>Profile</h1>
        <div className={styles.input_box}>
          <label className={styles.label} htmlFor="profile_name">
            Name
          </label>
          <input
            className={styles.input}
            id="profile_name"
            type="text"
            name="profile_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!updateMode}
          />
        </div>
        <div className={styles.input_box}>
          <label className={styles.label} htmlFor="profile_email">
            Your Email
          </label>
          <input
            className={styles.input}
            id="profile_email"
            type="email"
            name="profile_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!updateMode}
          />
        </div>
        <button
          className={styles.btn}
          onClick={() => setUpdateMode(!updateMode)}
        >
          {updateMode ? "Save Changes" : "Update"}
        </button>
      </div>
      <div className={styles.orders}>
        <h3 className={styles.subheading}>Previous Orders</h3>
        {orders.map((order) => (
          <PreviousOrder items={order.orderItems} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
