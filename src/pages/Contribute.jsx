import React from 'react'
import { motion } from "framer-motion";
const Contribute = () => {
  return (
    <motion.div 
         initial={{ opacity: 0, y: 20 }} 
         animate={{ opacity: 1, y: 0 }} 
         exit={{ opacity: 0, y: -20 }} 
         transition={{ duration: 0.5 }}
         className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb"
       >



    <div className="flex flex-col py-15 gap-6 mt-6 px-15 ">
    <h1 className="flex items-center justify-left text-9xl text-[#E0E0E0] mb-10 font-hive gap-3 shimmer">
        Contribute
        

      </h1>

      <p className="text-left text-[#E0E0E0] mt-1 mb-19 font-primary text-xl typing">
      "Think you can do better? Prove it. Contribute and let’s see if your code can actually make a difference."
      </p>
      {/* Notes Hub Title & Search */}
      <div className="flex items-center justify-between">
       
        {/* Search & Filter */}
        <div className="flex items-left gap-4 mt-5 mr-72">
          <input
            type="text"
            placeholder="Search "
            className="bg-gray-800 text-white px-4 py-2 rounded-md w-60 outline-none focus:ring-2 size-12 focus:ring-blue-500"
          />
          <button className="bg-gray-700 px-5 py-3 rounded-md text-white hover:bg-gray-600  mb- -m-1">
            Filter
          </button>
        </div>
      </div>
      <h2 className="text-white text-4xl font-primary mt-6 px-6">Projects</h2>

{/* Notes Grid (Now properly placed below with spacing) */}
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6 px-10">
  {/* Card 1 */}
  <div className="rounded-lg">
    <div className="card bg-[#171f36] text-l w-96">
      <div className="card-body">
        <h2 className="card-title text-2xl">AI-Powered Personalized Learning</h2>
        <p className="text-xl">Research the use of artificial intelligence to create personalized learning experiences based on individual student preferences under proffesor dr.krishna</p>
        <div className="card-actions justify-end">
          <a
            href="https://sites.google.com/view/studentsdigitallibrary/home/year-i?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
 
  {/* Card 3 */}
  <div className="rounded-lg">
    <div className="card bg-[#171f36]  text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title text-2xl">Blockchain for Secure Voting Systems</h2>
        <p className="text-xl">Investigate the potential of blockchain technology to create a secure, transparent, and tamper-proof voting system. The research would focus on eliminating fraud,</p>
        <div className="card-actions justify-end">
          <a
            href="https://drive.google.com/physics-notes-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="rounded-lg">
    <div className="card bg-[#171f36]  text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title text-2xl">AI in Mental Health Diagnostics</h2>
        <p className="text-xl">tudy the potential of artificial intelligence in diagnosing mental health disorders by analyzing speech patterns, behavioral cues, and physiological data. .</p>
        <div className="card-actions justify-end">
          <a
            href="https://drive.google.com/ml-notes-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="text-center mt-20 mb-10">
        <h1 className="flex items-center justify-left text-5xl text-white font-primary gap-3">
          <img src="git.svg" className="w-14 h-14" alt="Logo" />
          Git hub repos - start contributing
        </h1>
      </div>

{/* Notes Grid (Now properly placed below with spacing) */}
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6 px-10">
  {/* Card 1 */}
  <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full transform items-end border-2 border-black bg-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="git.svg"
        className="size-10 sm:size-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">SkillSync</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium sm:text-2xl">SkillSync</h3>

      <p className="mt-4 text-sm sm:text-base">
      An innovative hub for personalized learning, where students can connect with mentors and gain new skills tailored to their academic and career goals.
      </p>

      <p className="mt-8 font-bold">Read more</p>
      <div class="badge badge-success gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="inline-block h-4 w-4 stroke-current">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  success
</div>
    </div>
  </div>
</a>

  {/* Card 2 */}
  <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full transform items-end border-2 border-black bg-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 sm:size-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">StreamTide</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium sm:text-2xl">StreamTide</h3>

      <p className="mt-4 text-sm sm:text-base">
      A smart streaming platform that curates content based on your mood and preferences, making sure you always have the perfect show to watch, no matter the moment.
      </p>

      <p className="mt-8 font-bold">start contributing</p>
      <div class="badge badge-success gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="inline-block h-4 w-4 stroke-current">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  success
</div>
    </div>
  </div>
</a>

  {/* Card 3 */}
  <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full transform items-end border-2 border-black bg-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 sm:size-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">EventFlow</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium sm:text-2xl">EventFlow</h3>

      <p className="mt-4 text-sm sm:text-base">
      A one-stop platform for all things events. Whether it’s campus happenings, local meetups, or global conferences, EventFlow keeps you in the loop.
      </p>

      <p className="mt-8 font-bold">start contributing</p>
      <div class="badge badge-success gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="inline-block h-4 w-4 stroke-current">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  success
</div>
    </div>
  </div>
</a>

  {/* Card 4 */}
  <a href="https://github.com/h0i5/Foursight" className="group relative block h-64 sm:h-80 lg:h-96">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full transform items-end border-2 border-black bg-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 sm:size-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">foursight.</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium sm:text-2xl">foursight</h3>

      <p className="mt-4 text-sm sm:text-base">
        tried off doing trading with demat account start paper trading and improve your skills
      </p>

      <p className="mt-8 font-bold">Start contributing</p>
      <div class="badge badge-success gap-2">
  <svg
   
    class="inline-block h-4 w-4 text-xs stroke-current">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  AI-ML
</div>
    </div>
  </div>
</a>
</div>

      </div>





      </motion.div>
  )
}

export default Contribute