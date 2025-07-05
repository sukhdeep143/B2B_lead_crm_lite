import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Branding Section */}
        <div className="md:w-1/3">
          <h2 className="text-white text-2xl font-semibold mb-2">Lead CRM Lite</h2>
       <img src="/Logo/12.png" alt="B2B Lead CRM Lite"  className="w-2xl h-52 rounded-2xl" />

          <p className="text-gray-400 mb-1">Empowering lead management, simply and smartly.</p>
          <p className="text-sm text-gray-500 mt-4">© 2025 | v1.0.0</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/admin-register" className="hover:text-white">Admin Register</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/register" className="hover:text-white">Register</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-medium mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:rahulpatilccis@gmail.com" className="hover:text-white">
                Contact Support
              </a>
            </li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;