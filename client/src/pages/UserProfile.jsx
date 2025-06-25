import Navbar2 from '../components/Navbar2';
// import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const UserProfile = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      window.location.href = '/login';
    }
  }, []);

  return (
    <>
      {/* <Navbar2 toggleSidebar={toggleSidebar} /> */}
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow overflow-hidden mt-6">
          {/* <Sidebar isOpen={sidebarOpen} /> */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-xl w-full">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Hello, {user?.name || 'User'} 👋
              </h1>
              <p className="text-lg text-gray-600">
                Welcome to your profile. You are logged in as <strong>{user?.role}</strong>.
              </p>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserProfile;
