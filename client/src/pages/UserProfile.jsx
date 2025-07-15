import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchUserLeads(parsedUser.id);
    } else {
      navigate('/login');
    }
  }, [navigate]);
  
  const fetchUserLeads = async (userId) => {
    try {
      const response = await fetch(`/api/leads/user/${userId}`);
      const data = await response.json();
      setLeads(data);
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    }
  };
  

  const handleDeleteLead = async (leadId) => {
  if (!window.confirm('Are you sure you want to delete this lead?')) return;

  try {
    const response = await fetch(`/api/leads/${leadId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Remove deleted lead from UI
      setLeads(leads.filter(lead => lead._id !== leadId));
    } else {
      console.error('Failed to delete lead');
    }
  } catch (err) {
    console.error('Error deleting lead:', err);
  }
};

const handleEditLead = (leadId) => {
  navigate(`/leads/edit/${leadId}`);
};


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
      {/* Main Body */}
      <div className="flex flex-col h-screen">
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Hello, {user?.name || 'User'} 👋
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              You are logged in as <strong>{user?.role}</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Leads</h3>

            <div className="overflow-x-auto bg-white rounded shadow">
              {/* <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Company</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Phone</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Notes</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leads.length > 0 ? (
                    leads.map((lead) => (
                      <tr key={lead._id}>
                        <td className="px-4 py-2">{lead.name}</td>
                        <td className="px-4 py-2">{lead.company || '-'}</td>
                        <td className="px-4 py-2">{lead.email}</td>
                        <td className="px-4 py-2">{lead.phone}</td>
                        <td className="px-4 py-2">{lead.status}</td>
                        <td className="px-4 py-2">{lead.notes || '-'}</td>
                        <td className="px-4 py-2">
                        <button className="text-blue-600 border-1 border-text-blue px-2 rounded hover:bg-blue-100"
                         onClick={() => handleEditLead(lead._id)}
                        >Edit</button>

                        <button className="ml-2 text-red-600 border-1 border-text-red px-2 rounded hover:bg-red-100"
                         onClick={() => handleDeleteLead(lead._id)}
                        >Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-4 py-4 text-center text-gray-500">
                        No leads found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table> */}
              <table className="min-w-full text-sm text-left text-gray-700">
    <thead className="bg-blue-50 sticky top-0 z-10 text-xs font-semibold uppercase tracking-wider border-b border-gray-200">
      <tr>
        <th className="px-6 py-3">Name</th>
        <th className="px-6 py-3">Company</th>
        <th className="px-6 py-3">Email</th>
        <th className="px-6 py-3">Phone</th>
        <th className="px-6 py-3">Status</th>
        <th className="px-6 py-3">Notes</th>
        <th className="px-6 py-3">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      {leads.length > 0 ? (
        leads.map((lead, index) => (
          <tr key={lead._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-6 py-4 font-medium text-gray-900">{lead.name}</td>
            <td className="px-6 py-4">{lead.company || '-'}</td>
            <td className="px-6 py-4">{lead.email}</td>
            <td className="px-6 py-4">{lead.phone}</td>
            <td className="px-6 py-4">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  lead.status === 'New'
                    ? 'bg-yellow-100 text-yellow-700'
                    : lead.status === 'Contacted'
                    ? 'bg-blue-100 text-blue-700'
                    : lead.status === 'Qualified'
                    ? 'bg-green-100 text-green-700'
                    : lead.status === 'Lost'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-purple-100 text-purple-700'
                }`}
              >
                {lead.status}
              </span>
            </td>
            <td className="px-6 py-4">{lead.notes || '-'}</td>
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
        ))
      ) : (
        <tr>
          <td colSpan="7" className="px-6 py-6 text-center text-gray-500">
            No leads found.
          </td>
        </tr>
      )}
    </tbody>
  </table>


            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UserProfile;
