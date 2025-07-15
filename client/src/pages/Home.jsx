import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div >
      <Header />

      <div className="flex flex-col min-h-screen items-center justify-center text-center py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to Lead CRM Lite
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl">
          A lightweight and powerful B2B lead management solution designed for
          sales teams and businesses to stay organized and close more deals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold"
          >
            Register
          </Link>
          <Link
            to="/admin-register"
            className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 font-semibold"
          >
            Admin Register
          </Link>
          <Link
            to="/login"
            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 font-semibold"
          >
            Login
          </Link>
          <Link
            to="/leads"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-semibold"
          >
            Add Lead
          </Link>
          <Link
            to="/user-profile"
            className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 font-semibold"
          >
            Profile
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
