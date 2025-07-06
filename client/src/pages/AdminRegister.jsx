import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Register.module.css';

const AdminRegister = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
        role: 'admin',
      });
      setSuccess('Admin registration successful! You can now log in.');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex-grow  flex items-center justify-center bg-gray-50 px-4 py-10">
        <form onSubmit={handleSubmit} className={`${styles.form} w-full max-w-md`}>
          <h1 className={styles.heading}>Admin Register</h1>

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

          <button type="submit" className={styles.submitBtn}>Register</button>

          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}

          <div className={styles.linkRow}>
            Already have an account?{' '}
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AdminRegister;
