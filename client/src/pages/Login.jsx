import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.css';

const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', values);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setFieldError('password', err.response?.data?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.pageBg}>
      <div className={styles.topNav}>
        <span className={styles.logo}>Lead CRM Lite</span>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="#" className={styles.navLink}>About</Link>
          <Link to="#" className={styles.navLink}>Contact</Link>
          <Link to="/register" className={styles.loginBtn}>Sign Up</Link>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={styles.form}>
            <h1 className={styles.heading}>Welcome back</h1>
            
            <label className={styles.label}>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
            />
            <ErrorMessage name="email" component="div" className={styles.error} />
            
            <label className={styles.label}>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              className={`${styles.input} ${errors.password && touched.password ? styles.inputError : ''}`}
            />
            <ErrorMessage name="password" component="div" className={styles.error} />
            
            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            
            <div className={styles.linkRow}>
              Don't have an account? <Link to="/register" className={styles.link}>Sign up</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login; 