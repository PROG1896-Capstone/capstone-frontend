import Link from "next/link";
import styles from "./signup.module.css";

export const Signup = () => {
  return (
    <div className={styles.page}>
      <form className={styles.form}>
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
