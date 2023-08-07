"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./signup.module.css";
import { useRouter } from 'next/navigation';

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }, 
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user.error) {
          alert(data.user.error);
        } else {
          router.push('/')
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Sign Up</h1>
        <div className={styles.input_box}>
          <label className={styles.label} htmlFor="signup_name">
            Name
          </label>
          <input
            className={styles.input}
            type="name"
            name="name"
            id="signup_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input_box}>
          <label className={styles.label} htmlFor="signup_email">
            Your Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="signup_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_box}>
          <label className={styles.label} htmlFor="signup_password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="signup_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className={styles.submit} type="submit" value="Sign Up" />
        <Link className={styles.link} href="/login">
          Already have an account? Sign in
        </Link>
      </form>
    </div>
  );
};

export default Signup;
