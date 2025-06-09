import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Lost = () => {
  return (
    <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.8 }}
          className="p-10 bg-[#121212] text-white-xl min-h-screen px-1 py-12 mb "
        >
          
    <div className="px-15 py-15 mt-3">
   
      
         <h1 className="flex items-center justify-left text-8xl text-[#E0E0E0] mb-10 font-poppins gap-3 shimmer">
        Trackback
        

      </h1>

      <p className="text-left text-[#E0E0E0] mt-1 mb-19 font-primary text-xl typing">
      "Lost something? Found something? Connect here and reunite lost items with their owners!"
      </p>
        <div className="flex flex-grid-3 gap-6 mt-7 px-20 py20">



          
    {[
      {
        img: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFjayUyMHBhY2t8ZW58MHx8MHx8fDA%3D",
        title: " Black Backpack",
        text: "A black Nike backpack was lost near the library. Contains notebooks .",
        link: "/lost-found",
        
      },
      {
        img: "https://images.unsplash.com/photo-1505236273191-1dce886b01e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
        title: " Wireless Earbuds",
        text: "A pair of white wireless earbuds was found in the cafeteria. Identify the case to claim.",
        link: "/lost-found",
      },
      {
        img: "https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnQlMjBpZCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
        title: " Student ID Card",
        text: "A student ID card (Name: A. Sharma) was lost in Block C. If found, please return to reception.",
        link: "/lost-found",
      },
      {
        img: "https://images.unsplash.com/photo-1611079830811-865ff4428d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm90ZSUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
        title: " Notebook with Class Notes",
        text: "A blue spiral notebook containing handwritten notes was found in the auditorium. Claim it soon!",
        link: "/lost-found",
      },
    ].map((item, index) => (
      <article key={index} className="overflow-hidden rounded-lg shadow-lg transition-all hover:scale-105">
        <img src={item.img} className="h-56 w-full object-cover hover:brightness-110 transition-all" alt={item.title} />
        <div className="p-6 bg-white dark:bg-gray-900">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{item.text}</p>
          <br></br>
          <div className="badge badge-red bg-[#d82727]">not resolved</div>
        </div>
      </article>
      
    ))
    }
    
    <div className="mt-4 grid-cols-2">
  <h3 className="text-2xl font-semibold">Lost or found an item well let us know we will help you to find it</h3>
  <br></br>
  
  <br></br>
  
  <br></br>
  <Link to="/post" className="hover:text-gray-400 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Report now</Link>
  <div className="divider"></div>
  </div>
  </div>
  
  </div>


  </motion.div>
  
  )
}

export default Lost