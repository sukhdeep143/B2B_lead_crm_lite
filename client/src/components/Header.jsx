import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          <Link href="/">B2B Lead CRM Lite</Link>
        </h1>
        <nav className="space-x-4">
          {/* <Link href="/leads/add" className="hover:underline">Add Lead</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/login" className="hover:underline">Login</Link> */}
           <nav style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #eee', marginBottom: 24 }}>
                  <Link to="/">Home</Link>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                  {/* <Link to="/admin-register">Admin Register</Link> */}
                </nav>
        </nav>
      </div>
    </header>
  );
}
