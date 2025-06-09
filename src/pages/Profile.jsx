import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


const profile = () => {
  return (
    


<motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.8 }}
      className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb "
    >

    <div className="flex space-x-4 p-6 bg-black">
        
  
  {/* Left Div (Main Section) */}
  <div className="w-[65%]  bg-[#121212] text-white p-6 rounded-lg max-h-max px-15 mb-23">
  <h1 className="flex items-center justify-left text-7xl text-[#E0E0E0] mb-10 font-poppins gap-3 ">
        Hi,Prabhath
        

      </h1>

      
  

{/* 1️⃣ Profile Header */}
<div className="flex items-center gap-4">
  <img src="guts.png" alt="Profile" className="w-30 h-30 rounded-full border-2 border-gray-700" />
  <div>
    <h2 className="text-2xl font-bold">Prabhath</h2>
    <p className="text-gray-400">@Guts</p>
    <div className="divider"></div>
    <p className="italic text-gray-500 text-xl"></p>
  </div>
</div>
<div className="divider"></div><div className="divider"></div>
{/* 2️⃣ Basic Info */}
<div className="mt-4">
  <h3 className="text-2xl font-semibold">Basic Info</h3>
  <br></br>
  <p className="text-gray-400 text-xl">🎓 AIML | Anurag University | 1st Year</p>
  <br></br>
  <p className="text-gray-400 text-xl">📍 Hyderabad, India</p>
</div>
<div className="divider"></div>

{/* 3️⃣ Bio / About */}
<div className="mt-6">
  <h3 className="text-2xl font-semibold">About Me</h3>
  <br></br>
  <p className="text-gray-300 text-xl">
    Tech enthusiast, night owl, and AI dreamer. Learning ML & Web Dev. Always building, always exploring. 🚀
  </p>
</div>
<div className="divider"></div>
{/* 4️⃣ Skills & Interests */}
<div className="mt-4">
  <h3 className="text-2xl font-semibold">Skills</h3>
  <br></br>
  <p className="text-gray-400 text-xl">⚡ React, Tailwind, Supabase, ML, DSA, C++</p>
</div>
<div className="divider"></div>
{/* 5️⃣ Projects & Contributions */}
<div className="mt-4">
  <h3 className="text-2xl font-semibold">Projects</h3>
  <br></br>
  <ul className="text-gray-400 list-disc pl-4 text-xl">
    <li>📌 <b>CampusHive</b> - College Community Platform</li>
    
  </ul>
</div>
<div className="divider"></div>
{/* 6️⃣ Badges & Achievements */}

{/* 🔹 Social Links */}
<div className="mt-2 flex gap-4">
  <a href="https://github.com/dawnbreaker88" className="text-blue-400 hover:underline text-2xl">GitHub</a>
  <a href="https://www.linkedin.com/in/prabhath-vanka-1a2702279/" className="text-blue-400 hover:underline text-2xl">LinkedIn</a>
</div>



  </div>

  {/* Right Div (Additional Section) */}
  <div className="w-[35%] h-[980px] bg-[#121212] text-white p-6 rounded-lg">
  <div className="mt-4">
  <h3 className="text-2xl font-semibold">Contributions</h3>
  <br></br>
  <p className="text-gray-400 text-xl">no contributions yet,start now</p>
  <br></br>
  <p className="text-white-400 text-xl">Blogs</p>
  <br></br>
</div>

<Link to="/submit" className="hover:text-gray-400 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Submit a blog</Link>
<div className="divider"></div>
<div className="mt-4">
  <h3 className="text-2xl font-semibold">Lost or found an item well let us know we will help you to find it</h3>
  <br></br>
  
  <br></br>
  
  <br></br>
  <Link to="/post" className="hover:text-gray-400 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Report now</Link>
  <div className="divider"></div>
  <div className="mt-4">
  <h3 className="text-2xl font-semibold">"Think you're wise, responsible, and slightly addicted to power? Apply as a CampusHive moderator—because chaos needs a manager!" 🚀</h3>
  <br></br>
  
  
  
  <br></br>
  <Link to="/opensource" className="hover:text-gray-400 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Apply now</Link>
  <div className="divider"></div>
  
  
</div>

  
  
</div>

  </div>
  
  

</div>
</motion.div>
  )
}

export default profile