import React from 'react'
import { motion } from "framer-motion";

const Blogs = () => {




  return (

    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }}
      className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb"
    >
    <div className="flex flex-col  gap-6 mt-7 px-20 py20"> <h1 className="flex items-center justify-left text-9xl text-[#E0E0E0] mb-7 font-poppins gap-3 shimmer">
    Blogs
    

  </h1>

  <p className="text-left text-[#E0E0E0] mt-10 mb-2 font-primary text-xl typing">
  "Missed an event? Don’t worry, FOMO will remind you. Stay updated, show up, and pretend you totally planned to be there all along. Or just scroll and regret later."
  </p>


  <div className="text-left mt-20 mb-10">
  <h1 className="text-5xl text-white-500 font-primary ">
  
    Featured
  </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 ">
<a
  href="#"
  className="relative block overflow-hidden rounded-lg border bg-black border-gray-100 p-4 sm:p-6 lg:p-8"
>
  

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-white-900 sm:text-2xl">
      The Secret to Balancing Academics, Social Life, and Health: A Student’s Guide
      </h3>

      <p className="mt-1 text-s font-medium text-white-600">By Bhargav</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      
    </div>
  </div>

  <div className="mt-4">
    <p className="text-xl text-pretty text-white-500">
    As university students, we often find ourselves juggling multiple responsibilities — assignments, exams, social activities, and maintaining our health. It’s no easy task, but with the right approach, balancing it all is possible
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Published</dt>
      <dd className="text-s text-white-500">31st June, 2021</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Reading time</dt>
      <dd className="text-s text-white-500">3 minute</dd>
    </div>
  </dl>
</a>
<a
  href="#"
  className="relative block overflow-hidden rounded-lg border bg-black border-gray-100 p-4 sm:p-6 lg:p-8"
>
  

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-white-900 sm:text-2xl">
      Unfiltered Campus Thoughts 
      </h3>

      <p className="mt-1 text-s font-medium text-white-600">By Bhargav</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      
    </div>
  </div>

  <div className="mt-4">
    <p className="text-xl text-pretty text-white-500">
    Our blog is more than just words—it’s a collection of student experiences, insights, and opinions. Read about life on campus, the latest tech trends, personal development tips, and everything in between. Whether you're looking for motivation
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Published</dt>
      <dd className="text-s text-white-500">31st June, 2021</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Reading time</dt>
      <dd className="text-s text-white-500">3 minute</dd>
    </div>
  </dl>
</a>
<a
  href="#"
  className="relative block overflow-hidden rounded-lg border bg-black border-gray-100 p-4 sm:p-6 lg:p-8"
>
  

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-white-900 sm:text-2xl">
      From Lecture Halls to Life Lessons 
      </h3>

      <p className="mt-1 text-s font-medium text-white-600">By kishore</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      
    </div>
  </div>

  <div className="mt-4">
    <p className="text-xl text-pretty text-white-500">
    Beyond books and lectures, university life is a journey filled with experiences worth sharing. This blog brings you student stories on everything from coding struggles to late-night brainstorming sessions,
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Published</dt>
      <dd className="text-s text-white-500">31st June, 2023</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Reading time</dt>
      <dd className="text-s text-white-500">3 minute</dd>
    </div>
  </dl>
</a>

</div>
<div className="text-left mt-20 mb-10">
<h1 className="text-5xl text-white font-primary ">

  Recent blogs
</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
<a
  href="#"
  className="relative block overflow-hidden rounded-lg border bg-black border-gray-100 p-4 sm:p-6 lg:p-8"
>
  

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-white-900 sm:text-xl">
      University Life, Unfiltered 
      </h3>

      <p className="mt-1 text-s font-medium text-white-600">By ram</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      
    </div>
  </div>

  <div className="mt-4">
    <p className="text-xl text-pretty text-white-500">
    What’s it really like to be a student? Beyond assignments and exams, this blog captures the highs, the lows, and everything in between—first-year fears, last-minute project panic, unexpected victories,
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Published</dt>
      <dd className="text-s text-white-500">31st June, 2021</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Reading time</dt>
      <dd className="text-s text-white-500">3 minute</dd>
    </div>
  </dl>
</a>
<a
  href="#"
  className="relative block overflow-hidden rounded-lg border bg-black border-gray-100 p-4 sm:p-6 lg:p-8"
>
  

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-2xl font-bold text-white-900 sm:text-xl">
      The Student Journal
      </h3>

      <p className="mt-1 text-s font-medium text-white-600">By ravi</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      
    </div>
  </div>

  <div className="mt-4">
    <p className="text-xl text-pretty text-white-500">
    Every student has a story—whether it’s a breakthrough moment in coding, a tough lesson learned from a failed exam, or the excitement of landing that first internship. 
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Published</dt>
      <dd className="text-s text-white-500">31st June, 2021</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Reading time</dt>
      <dd className="text-s text-white-500">3 minute</dd>
    </div>
  </dl>
</a>
<a
  href="#"
  className="relative block overflow-hidden rounded-lg border bg-black border-gray-100 p-4 sm:p-6 lg:p-8"
>
  

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-2xl font-bold text-white-900 sm:text-xl">
      University Diaries 
      </h3>

      <p className="mt-1 text-s font-medium text-white-600">By ken</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      
    </div>
  </div>

  <div className="mt-4">
    <p className="text-xl text-pretty text-white-500">
    Some lessons aren’t taught in classrooms—they’re learned through experience. From securing that dream internship to figuring out how to survive on instant noodles, this blog is all about real student stories. 
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Published</dt>
      <dd className="text-s text-white-500">31st June, 2021</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-m font-medium text-white-600">Reading time</dt>
      <dd className="text-s text-white-500">3 minute</dd>
    </div>
  </dl>
</a>


</div>
<section className="py-20 mx-auto container max-w-4xl px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <h1 className="text-white-500 font-semibold text-xl">
          Want to get latest updates on blogs and news well just subscibe
        </h1>
        <div className="flex items-start flex-col gap-4 md:flex-row w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex-shrink-0 bg-blue-500 text-white px-6 py-2 rounded-md md:w-fit w-full hover:bg-blue-600 transition">
            Subscribe
          </button>
          
        </div>
        
      </div>
    </section>  
    <div className="flex justify-center items-center ">
  <button className="btn btn-wide">For more blogs</button>
</div>

  
  </div>

  </motion.div>
  )
}

export default Blogs

