import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'sales' });
  const [createMsg, setCreateMsg] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [allLeads, setAllLeads] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Load user from localStorage and fetch leads if admin
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      if (parsedUser.role === 'admin') {
        fetchAllLeads();
      }
    } else {
      window.location.href = '/login';
    }
  }, []);

  // Fetch all leads for admin
  const fetchAllLeads = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/leads', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAllLeads(res.data.leads);
    } catch (err) {
      console.error('Error loading leads:', err);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreateMsg('');
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/auth/create-user',
        newUser,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setCreateMsg('✅ User created successfully!');
      setNewUser({ name: '', email: '', password: '', role: 'sales' });
    } catch (err) {
      setCreateMsg(err.response?.data?.message || '❌ Failed to create user');
    }
  };

  return (
    <>
      <Navbar2 toggleSidebar={toggleSidebar} />
      <div className="flex flex-col pt-10">
        <div className="flex flex-grow overflow-hidden">
          <main className="flex-1 flex justify-center items-center bg-gray-50">
            <div className="max-w-xl w-full">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Welcome, {user?.name || 'User'}!
              </h1>

              {/* Update Profile */}
              <h2 className="text-xl font-semibold mb-6 text-gray-600">
                Update Profile
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.name}
                    placeholder="Enter name"
                    className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="Enter email"
                    className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter phone"
                    className="w-full mt-1 px-4 py-2 border rounded border-gray-300 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm bg-gray-200 rounded font-semibold hover:bg-gray-300"
                  >
                    Update Password
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded font-semibold hover:bg-blue-800"
                  >
                    Save Changes
                  </button>
                </div>
              </form>

              {/* Admin Only: Show Create User Button */}
              {user?.role === 'admin' && (
                <button
                  onClick={() => setShowCreateForm(!showCreateForm)}
                  className="mt-10 mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {showCreateForm ? 'Cancel' : '+ Create User'}
                </button>
              )}

              {/* Admin Only: Create New User Form */}
              {user?.role === 'admin' && showCreateForm && (
                <>
                  <h2 className="text-xl font-semibold mb-4 text-gray-600">
                    Create New User
                  </h2>
                  <form className="space-y-4 pb-10" onSubmit={handleCreateUser}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Role</label>
                      <select
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
                      >
                        <option value="sales">Sales</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm bg-green-600 text-white rounded font-semibold hover:bg-green-800"
                    >
                      Create User
                    </button>
                    {createMsg && (
                      <p className="text-sm mt-2 text-gray-700">{createMsg}</p>
                    )}
                  </form>
                </>
              )}

              {/* Admin Only: Show All Leads */}
              {user?.role === 'admin' && (
                <>
                  <h2 className="text-xl font-semibold mt-10 mb-4 text-gray-600">All Leads</h2>
                  <div className="space-y-4 pb-20">
                    {allLeads.length === 0 && <p className="text-gray-600">No leads found.</p>}
                    {allLeads.map((lead) => (
                      <div key={lead._id} className="p-4 border rounded shadow-sm bg-white">
                        <h3 className="font-semibold text-lg">{lead.name}</h3>
                        <p className="text-gray-700">Email: {lead.email}</p>
                        <p className="text-gray-700">Phone: {lead.phone}</p>
                        <p className="text-gray-700">Status: {lead.status}</p>
                        {lead.createdBy && (
                          <p className="text-gray-700 mt-2">
                            <span className="font-semibold">Created by:</span> {lead.createdBy.name} ({lead.createdBy.email})
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
