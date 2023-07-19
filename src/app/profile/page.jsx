"use client";
import { useState } from "react";
import PreviousOrder from "@/components/PreviousOrder/PreviousOrder";
import styles from "./profile.module.css";

const Profile = () => {
  const previousOrders = [
    {
      id: 1,
      items: [
        {
          name: "Beef Burger",
          quantity: 1,
        },
        {
          name: "Coke Soda",
          quantity: 1,
        },
        {
          name: "Seafood Pasta",
          quantity: 1,
        },
      ],
      price: 20,
    },
    {
      id: 2,
      items: [
        {
          name: "Beef Burger",
          quantity: 1,
        },
        {
          name: "Coke Soda",
          quantity: 1,
        },
        {
          name: "Seafood Pasta",
          quantity: 1,
        },
      ],
      price: 20,
    },
    {
      id: 3,
      items: [
        {
          name: "Beef Burger",
          quantity: 1,
        },
        {
          name: "Coke Soda",
          quantity: 1,
        },
        {
          name: "Seafood Pasta",
          quantity: 1,
        },
      ],
      price: 20,
    },
  ];

  const [updateMode, setUpdateMode] = useState(false);

  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");

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
        {previousOrders.map((order) => (
          <PreviousOrder
            items={order.items}
            price={order.price}
            key={order.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
