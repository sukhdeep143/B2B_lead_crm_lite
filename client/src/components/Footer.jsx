import { Link } from 'react-router-dom';
import logoFooter from '../assets/logo_footer.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 py-10 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Branding Section */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={logoFooter}
              alt="B2B Lead CRM Lite"
              className="w-[150px] h-auto object-contain dark:invert"
              loading="lazy"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Empowering lead management, simply and smartly.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">© 2025 | v1.0.0</p>
        </div>

        {/* Link Sections */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 justify-center text-center md:text-left">

            {/* Quick Links */}
            <div>
              <h4 className="text-gray-800 dark:text-white text-lg font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-left inline-block">
                <li><Link to="/about" className="hover:text-black dark:hover:text-white">About</Link></li>
                <li><Link to="/admin-register" className="hover:text-black dark:hover:text-white">Admin Register</Link></li>
                <li><Link to="/dashboard" className="hover:text-black dark:hover:text-white">Dashboard</Link></li>
                <li><Link to="/login" className="hover:text-black dark:hover:text-white">Login</Link></li>
                <li><Link to="/register" className="hover:text-black dark:hover:text-white">Register</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-gray-800 dark:text-white text-lg font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-left inline-block">
                <li>
                  <a href="mailto:rahulpatilccis@gmail.com" className="hover:text-black dark:hover:text-white">
                    Contact Support
                  </a>
                </li>
                <li><Link to="/privacy-policy" className="hover:text-black dark:hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-black dark:hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
