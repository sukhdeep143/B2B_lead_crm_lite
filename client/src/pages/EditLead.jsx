import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditLead = () => {
  const { id } = useParams(); // lead ID from route
  const navigate = useNavigate();
  const [lead, setLead] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    status: 'New',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch existing lead details
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const res = await fetch(`/api/leads/${id}`);
        if (!res.ok) throw new Error('Failed to fetch lead');
        const data = await res.json();
        setLead(data);
      } catch (err) {
        setError('Error fetching lead details.');
      }
    };

    fetchLead();
  }, [id]);

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });

      if (!res.ok) throw new Error('Update failed');
      navigate('/user-profile');
    } catch (err) {
      setError('Failed to update lead');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {/* Blue Header */}
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
         Edit Lead
        </h1>
        <button onClick={() => navigate('/user-profile')} className="bg-white text-blue-800 font-semibold px-4 py-2 rounded hover:bg-gray-200">
          Back to Profile
        </button>

      </header>
    <div className="min-h-screen bg-gray-50 p-8">

      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Lead</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={lead.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              name="company"
              value={lead.company}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={lead.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              name="phone"
              value={lead.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={lead.status}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Lost">Lost</option>
              <option value="Won">Won</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              name="notes"
              value={lead.notes}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/user-profile')}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditLead;
