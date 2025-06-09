import React from 'react'
import { motion } from "framer-motion";

const Dashboard = () => {
  return (

     <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.8 }}
          className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb "
        >
    <div><div className="flex min-h-screen bg-black-100">
    {/* Sidebar */}
    <aside className="w-64 bg-[#121212] text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          <li><a href="#" className="block hover:text-gray-300">Dashboard</a></li>
          <li><a href="#" className="block hover:text-gray-300">Users</a></li>
          <li><a href="#" className="block hover:text-gray-300">Posts & Blogs</a></li>
          <li><a href="#" className="block hover:text-gray-300">Events</a></li>
          <li><a href="#" className="block hover:text-gray-300">Logs</a></li>
          <li><a href="#" className="block hover:text-gray-300">Settings</a></li>
        </ul>
      </nav>
    </aside>
  
    {/* Main Content Area */}
    <div className="flex-1 p-8 bg-balck">
    <h1 className="flex items-center justify-left text-7xl text-[#E0E0E0] mb-10 font-poppins gap-3 ">
        Welcome,hasrith

      </h1>
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-[#1F2937] shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Logout</button>
      </div>
  
      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">1,245</p>
        </div>
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Total Blogs</h3>
          <p className="text-3xl font-bold">342</p>
        </div>
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Reported Content</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Pending approvals</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
      </div>
      
  
      {/* Management Sections */}
      <div className="grid grid-cols-2 gap-6">
        {/* User Management */}
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Manage Users</h3>
          <button className="bg-green-500 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">View All Users</button>
        </div>
  
        {/* Post & Blog Management */}
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Moderate Posts & Blogs</h3>
          <button className="bg-yellow-500 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Review Submissions</button>
        </div>
  
        {/* Event Management */}
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Manage Events</h3>
          <button className="bg-blue-500 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">View Events</button>
        </div>
  
        {/* Reports & Moderation */}
        <div className="bg-[#1F2937] p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Reported Content</h3>
          <button className="bg-red-500 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Review Reports</button>
        </div>
      </div>
    </div>
  </div>
  </div>


  </motion.div>
  )
}

export default Dashboard