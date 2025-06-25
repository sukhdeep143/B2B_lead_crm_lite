import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import ProfilePage from './pages/Dashboard';
import AddLead from './pages/LeadPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <BrowserRouter >
      <div className="flex flex-col min-h-screen bg-gray-50">
       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-register" element={<AdminRegister />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/lead" element={<AddLead />} />
            <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user-profile" element={<UserProfile />} />

          </Routes>
        </main>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
