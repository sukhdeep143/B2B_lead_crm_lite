import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/HeaderProfile";
import Footer from "../components/Footer";

export default function LeadPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    status: "New",
    notes: "",
  });
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      window.location.href = "/login";
    } else {
      const user = JSON.parse(userData);
      setUserId(user.id); // Set user ID for createdBy
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const leadData = {
        ...form,
        createdBy: userId,
      };

      await axios.post("http://localhost:5000/api/leads", leadData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("✅ Lead added successfully!");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        status: "New",
        notes: "",
      });
    } catch (err) {
      console.error("Error adding lead:", err);
      setMessage("❌ Error adding lead. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl mt-10">
          <h1 className="text-xl font-bold mb-4">Add New Lead</h1>
          {message && <p className="mb-4 text-blue-600">{message}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Lost">Lost</option>
              <option value="Won">Won</option>
            </select>
            <textarea
              name="notes"
              placeholder="Notes"
              value={form.notes}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Lead
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
