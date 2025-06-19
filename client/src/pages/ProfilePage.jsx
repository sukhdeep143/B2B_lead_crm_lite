import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';

const ProfilePage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  return (
    <>
    <Navbar2 toggleSidebar={toggleSidebar} />
    <div className='flex overflow-hidden h-screen mt-6'>
    <Sidebar isOpen={sidebarOpen} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-xl w-full">
            <h1 className="text-2xl font-bold mb-6">Update Profile</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name='name'
                  placeholder="Enter name"
                  className="w-full mt-1 px-4 py-2 border rounded  border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name='email'
                  className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
                    required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="number"
                    placeholder="Enter Phone"
                    name='phone'
                    max={10}
                    min={10}
                    className="w-full mt-1 px-4 py-2 border rounded  border-gray-300 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <button
                  type="button"
                  className="px-4 py-2 text-sm md:txet-md bg-gray-100 rounded font-semibold hover:bg-gray-300"
                >
                  Update Password
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm md:text-md bg-blue-600 text-white rounded font-semibold hover:bg-blue-800"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      
    </div>
    </>
  )
}

export default ProfilePage
