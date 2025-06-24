import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "sales",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
      });
      setSuccess("Registration successful! You can now log in.");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
   <Header />
    
    <div className={styles.pageBg}>
     
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Register</h1>
        <label className={styles.label}>Name</label>
        <input
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
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
        <label className={styles.label}>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}
        <div className={styles.linkRow}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </div>
      </form>
    </div>
    <Footer />
     </div>
  );
};

export default Register;
