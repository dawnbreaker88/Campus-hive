// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../App.css";


const Navbar = () => {
  return (
   
  
    <div className="navbar bg-[#000000] text-white px-6 font-sans flex items-center justify-between">
      {/* Left Side - Logo */}
      <div className="flex-1">
      <Link to="/">
  <img src="logo.png" alt="CampusHive Logo" className="h-25 w-auto" />
</Link>


      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex gap-5 flex-1 justify-center align-middle text-xl">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/notes" className="hover:text-gray-400">Notes Hub</Link>
        <Link to="/events" className="hover:text-gray-400">Events</Link>
        <Link to="/discussions" className="hover:text-gray-400">Discussions</Link>
        <Link to="/news" className="hover:text-gray-400">News</Link>
        <Link to="/lost-found" className="hover:text-gray-400">TrackBack</Link>
        <Link to="/results" className="hover:text-gray-400">Results</Link>
        <Link to="/blogs" className="hover:text-gray-400">Blogs</Link>
        <Link to="/opensource" className="hover:text-gray-400">Contribute</Link>
      </div>

      {/* Right Side - Profile Icon */}
      <div className="flex-none ">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-20 h-20 rounded-full">
              <img src="guts.png" alt="Profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-8 shadow menu menu-xl dropdown-content bg-black text-white rounded-box w-90 "
          >
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>

          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
