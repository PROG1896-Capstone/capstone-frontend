"use client"

import styles from "./home.module.css";
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from "react";

export const Home = async () => {
  const { data: session, status } = useSession();
  
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading} id={styles.title}>
          Sunset Bistro
        </h1>
        <p className={styles.paragraph}>Once you try it, you will love it.</p>
        <Link href='/menu'><button className={styles.btn}>Order Now</button></Link>
      </div>
    </div>
  );
};

export default Home;
