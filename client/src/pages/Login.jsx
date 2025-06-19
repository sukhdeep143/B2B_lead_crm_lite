import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className={styles.pageBg}>
      <div className={styles.topNav}>
        <span className={styles.logo}>Lead CRM Lite</span>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="#" className={styles.navLink}>
            About
          </Link>
          <Link to="#" className={styles.navLink}>
            Contact
          </Link>
          <Link to="/register" className={styles.loginBtn}>
            Sign Up
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Welcome back</h1>
        <label className={styles.label}>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <label className={styles.label}>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          Login
        </button>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.linkRow}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.link}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
