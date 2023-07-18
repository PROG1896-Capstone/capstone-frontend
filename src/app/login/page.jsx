import Link from "next/link";
import styles from "./login.module.css";

export const Login = () => {
  return (
    <div className={styles.page}>
      <form className={styles.form}>
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
          />
        </div>
        <input className={styles.submit} type="submit" value="Sign In" />
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            Forgot Password?
          </Link>
          <Link className={styles.link} href="/signup">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
