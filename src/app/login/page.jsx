"use client";
import Link from "next/link";
import styles from "./login.module.css";
import { signIn, signOut } from "next-auth/react"
import { useState } from "react";
import { useRouter } from 'next/navigation'

export const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [formError, setFormError] = useState('')
  const handleSubmit= async (e) => {
    e.preventDefault()
    const status = await signIn('credentials', {
      redirect: false, 
      userName: email,
      password: password,
      callbackUrl: '/'
    })
    setFormError(status.error)
    if (!status.error) {
      router.push('/')
    }
  }
  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Sign In</h1>
        <div className={styles.input_box}>
          <label className={styles.label} htmlFor="login_email">
            Your Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="login_email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_box}>
          <label className={styles.label} htmlFor="login_password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="login_password"
            onChange={(e)=> setPassword(e.target.value)}
          />
          {formError && <div className={styles.errorMessage}>{formError}</div>}
        </div>
        <input className={styles.submit} type="submit" value="Sign In" />
        <div className={styles.links}>
          <Link className={styles.link} href="/signup">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
