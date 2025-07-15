import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'sales' });
  const [createMsg, setCreateMsg] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [allLeads, setAllLeads] = useState([]);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchAllLeads();
    }
  }, [user]);

  const fetchAllLeads = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/leads/all', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAllLeads(res.data);
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    }
  };

  const handleEditLead = (leadId) => {
    navigate(`/leads/edit/${leadId}`);
  };

  const handleDeleteLead = async (leadId) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/leads/${leadId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAllLeads(allLeads.filter((lead) => lead._id !== leadId));
    } catch (err) {
      console.error('Error deleting lead:', err);
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
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow overflow-hidden mt-6">
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto w-full">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Welcome, {user?.name || 'User'}!
              </h1>

              <h2 className="text-xl font-semibold mb-6 text-gray-600">
                Update Profile
              </h2>

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" defaultValue={user?.name} className="w-full mt-1 px-4 py-2 border rounded border-gray-300" />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" defaultValue={user?.email} className="w-full mt-1 px-4 py-2 border rounded border-gray-300" />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="number" placeholder="Enter phone" className="w-full mt-1 px-4 py-2 border rounded border-gray-300 appearance-none" />
                </div>
                {/* Buttons */}
                <div className="flex space-x-4">
                  <button type="button" className="px-4 py-2 bg-gray-200 rounded font-semibold hover:bg-gray-300">
                    Update Password
                  </button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-800">
                    Save Changes
                  </button>
                </div>
              </form>

              {user?.role === 'admin' && (
                <>
                  {/* Create User Toggle */}
                  <button
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="mt-10 mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {showCreateForm ? 'Cancel' : '+ Create User'}
                  </button>

                  {/* Create User Form */}
                  {showCreateForm && (
                    <>
                      <h2 className="text-xl font-semibold mb-4 text-gray-600">Create New User</h2>
                      <form className="space-y-4" onSubmit={handleCreateUser}>
                        <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} className="w-full px-4 py-2 border rounded border-gray-300" required />
                        <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} className="w-full px-4 py-2 border rounded border-gray-300" required />
                        <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} className="w-full px-4 py-2 border rounded border-gray-300" required />
                        <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} className="w-full px-4 py-2 border rounded border-gray-300">
                          <option value="sales">Sales</option>
                          <option value="admin">Admin</option>
                        </select>
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-800">
                          Create User
                        </button>
                        {createMsg && <p className="text-sm text-gray-700">{createMsg}</p>}
                      </form>
                    </>
                  )}

                  {/* All Leads Table */}
                  {allLeads.length > 0 && (
                    <div className="mt-10">
                      <h2 className="text-xl font-semibold mb-4 text-gray-700">All Leads</h2>
                      <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="min-w-full text-sm text-left text-gray-700">
                          <thead className="bg-blue-50 text-xs font-semibold uppercase border-b border-gray-200">
                            <tr>
                              <th className="px-6 py-3">Name</th>
                              <th className="px-6 py-3">Company</th>
                              <th className="px-6 py-3">Email</th>
                              <th className="px-6 py-3">Phone</th>
                              <th className="px-6 py-3">Status</th>
                              <th className="px-6 py-3">Notes</th>
                              <th className="px-6 py-3">Created By</th>
                              <th className="px-6 py-3">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {allLeads.map((lead) => (
                              <tr key={lead._id}>
                                <td className="px-6 py-4">{lead.name}</td>
                                <td className="px-6 py-4">{lead.company || '-'}</td>
                                <td className="px-6 py-4">{lead.email}</td>
                                <td className="px-6 py-4">{lead.phone}</td>
                                <td className="px-6 py-4">{lead.status}</td>
                                <td className="px-6 py-4">{lead.notes || '-'}</td>
                                <td className="px-6 py-4">{lead.createdBy?.name || '-'}</td>
                                <td className="px-6 py-4 flex gap-2">
                                  <button
                                    onClick={() => handleEditLead(lead._id)}
                                    className="text-blue-600 hover:bg-blue-100 px-2 rounded border border-blue-200"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => handleDeleteLead(lead._id)}
                                    className="text-red-600 hover:bg-red-100 px-2 rounded border border-red-200"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
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
