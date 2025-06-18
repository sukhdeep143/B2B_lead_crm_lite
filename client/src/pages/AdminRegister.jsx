import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Register.module.css';

const AdminRegister = () => {
  const [success, setSuccess] = useState('');

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required')
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError, resetForm }) => {
    setSuccess('');
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        name: values.name,
        email: values.email,
        password: values.password,
        role: 'admin'
      });
      setSuccess('Admin registration successful! You can now log in.');
      resetForm();
    } catch (err) {
      setFieldError('email', err.response?.data?.message || 'Registration failed');
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
          <Link to="/login" className={styles.loginBtn}>Login</Link>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={styles.form}>
            <h1 className={styles.heading}>Admin Register</h1>
            
            <label className={styles.label}>Name</label>
            <Field
              name="name"
              placeholder="Enter your name"
              className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
            />
            <ErrorMessage name="name" component="div" className={styles.error} />
            
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
            
            <label className={styles.label}>Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className={`${styles.input} ${errors.confirmPassword && touched.confirmPassword ? styles.inputError : ''}`}
            />
            <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
            
            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            
            {success && <div className={styles.success}>{success}</div>}
            
            <div className={styles.linkRow}>
              Already have an account? <Link to="/login" className={styles.link}>Login</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminRegister; 