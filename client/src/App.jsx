import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #eee', marginBottom: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/admin-register">Admin Register</Link> */}
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/" element={<div className='bg-red-400'>b2b</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
