import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleAddLead = () => {
    navigate('/leads');
  };

  return (
    <>
      {/* Blue Header */}
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Welcome, {user?.name || 'User'}!
        </h1>
        <div className="flex gap-4">
          <button
            onClick={handleAddLead}
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            + Add Lead
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex flex-col h-screen">
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Hello, {user?.name || 'User'} 👋
            </h2>
            <p className="text-lg text-gray-600">
              Welcome to your profile. You are logged in as{' '}
              <strong>{user?.role}</strong>.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UserProfile;
