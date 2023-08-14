"use client";
import { useState, useEffect } from "react";
import CartItem from "@/components/CartItem/CartItem";
import styles from "./cart.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const Cart = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [cartItems, setCartItems] = useState([]);

  const [subtotal, setSubtotal] = useState(0);

  const addSubtotal = (value) => {
    const newSubtotal = parseInt(subtotal) + parseInt(value);

    setSubtotal(newSubtotal);
    localStorage.setItem("subtotal", JSON.stringify(newSubtotal));
  };

  const removeItem = (index) => {
    const halfBeforeTheUnwantedElement = cartItems.slice(0, index);

    const halfAfterTheUnwantedElement = cartItems.slice(index + 1);

    const newItems = halfBeforeTheUnwantedElement.concat(
      halfAfterTheUnwantedElement
    );

    setCartItems(newItems);

    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) setCartItems(items);

    const subtotal = JSON.parse(localStorage.getItem("subtotal"));
    if (subtotal) setSubtotal(subtotal);
  }, []);

  const saveCart = () => {
    if (!session){
      router.push("/login")
      return
    }

    fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify({
        userId: session.user.id,
        orderItems: cartItems,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  
      alert("Order created");
      localStorage.clear();
      location.reload();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.cart}>
          <h1 className={styles.heading}>Cart</h1>
          {cartItems.map((item,index) => (
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              savedQuantity={item.quantity}
              addSubtotal={addSubtotal}
              remove={() => removeItem(index)}
              key={`${item.id}_${item.name}`}
            />
          ))}
        </div>
        <div className={styles.subtotal}>
          <h3 className={styles.subheading}>Subtotal: ${subtotal}</h3>
          <button className={styles.btn} onClick={saveCart}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
