import React from 'react';
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pattern from '../components/Pattern';


const Home = () => {
  return (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.8 }}
      className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb "
    >
       <Pattern /> 

      <div className="bg-indigo-600 px-4 py-3 text-white">
        
  <p className="text-center text-sm font-medium">
    
    <a href="https://www.ted.com/tedx/events/53029" className="inline-block underline text-2xl">TEDxANURAGu tcikets are out now</a>
  </p>
</div>
    
    <div className="bg-[#121212] text-white-xl min-h-screen px-12 py-12 mb">
      {/* Header */}
      <h1 className="flex items-left justify-left text-9xl text-[#E0E0E0] mb-10 font-hive gap-3">
        Welcome to <h1 className=" shimmer2 ">CampusHive</h1>

      </h1>

      <p className="text-left text-[#E0E0E0] mt-6 mb-19 font-primary text-xl">
        Your ultimate digital hub for everything related to university life. From study materials to event updates, we've got you covered. Join thousands of students in building a smarter campus community.🚀 
      </p>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {[
          { img: "notes.png", title: "Notes Hub", text: "Can't find notes for your exams? Find all subjects notes here! Sharing is caring, so please share your notes." },
          { img: "dis3.png", title: "News", text: "Missing out on important campus news? Keep updated with the latest campus news and announcements." },
          { img: "os.png", title: "Contribute", text: "Love building things and being part of something big? Access all open-source projects and start contributing!" }
        ].map((feature, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl hover:scale-105 transform transition-transform">
            <figure>
              <img src={feature.img} alt={feature.title} />
            </figure>
            <div className="card-body bg-[#1F2937]">
              <h2 className="card-title font-primary text-white text-2xl">{feature.title}</h2>
              <p className="content font-sans text-lg text-white">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="text-center mt-20 mb-10">
        <h1 className="flex items-center justify-left text-5xl text-white-500 font-primary gap-3">
          <img src="loooo.svg" className="w-14 h-14" alt="Logo" />
          Upcoming Events
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
        {[
          {
            img: "innoo.png",
            date: "27TH-28TH FEB",
            title: "INNOQUEST#2",
            description: "Hackathon exclusively for first years in collaboration with Microsoft. Learn about AI and Copilot and build your ideas!",
            venue: "VENUE - E-block Auditorium"
          },
          {
            img: "tedx.png",
            date: "15th Oct 2022",
            title: "TEDxANURAGu",
            description: "TEDxANURAGu 7th edition with more seats and guests. Book your tickets now group passes are out now so hurry up!!!",
            venue: "VENUE - TBA"
          }
        ].map((event, index) => (
          <article key={index} className="overflow-hidden rounded-lg shadow-sm transition-all hover:scale-105">
            <img src={event.img} className="h-56 w-full object-cover" alt={event.title} />
            <div className="bg-[#1F2937] p-4">
              <time className="block text-lg text-gray-400">{event.date}</time>
              <h3 className="mt-2 text-2xl text-white">{event.title}</h3>
              <p className="mt-2 text-lg text-white">{event.description}</p>
              <p className="mt-2 text-lg text-white font-semibold">{event.venue}</p>
              <a 
                  href="https://reskilll.com/hack/innoquest2/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-1 mt-2"
                >
                  Register
                </a>
            </div>
            
          </article>
        ))}
      </div>

      {/* News Section */}
      <div className="text-left mt-20 mb-20">
  <h1 className="flex items-center justify-start text-5xl text-white font-primary gap-3">
    <img src="news.svg" className="w-14 h-14" alt="Logo" />
    News
  </h1>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
        {[
          {
            img: "asu.png",
            title: "Anurag University collaborates with Arizona State University",
            text: "Anurag University collaborates with Arizona State University and launches two new programs, making its presence felt internationally.",
            link: "/news"
          },
          {
            img: "au.png",
            title: "Admissions Open for 2025",
            text: "Anurag University has opened its doors for the 2025 academic year. Prospective students can apply through the Anurag Common Entrance Test (CET) .  ",
            link: "/news"
          }
        ].map((news, index) => (
          <article key={index} className="overflow-hidden rounded-lg shadow-lg transition-all hover:scale-105">
            <img src={news.img} className="h-56 w-full object-cover hover:brightness-110 transition-all" alt={news.title} />
            <div className="p-6 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-medium text-white-900 dark:text-white">{news.title}</h3>
              <p className="mt-2 text-white-500 dark:text-white-400 text-xl">{news.text}</p>
              <Link to={news.link} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-400 transition-all">Read more →</Link>
            </div>
          </article>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="w-full flex flex-col items-center justify-center gap-8 mt-20">
        <h1 className="text-4xl text-gray-700 text-center w-4/5">
          "This is a revolutionary platform for students, helping in every aspect of student life."
        </h1>
        <div className="flex flex-col items-center">
          <span className="text-gray-600 font-bold text-xl">Hasrith</span>
          <span className="text-gray-400 font-normal text-lg">Student</span>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
    <div className="mx-auto max-w-md">
      <strong className="block text-center text-xl font-bold text-white-900 sm:text-3xl">
        Want us to email your Blogs and contribute to CampusHive
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full rounded-full border-gray-200 bg-black-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Join
          </button>
        </div>
      </form>
    </div>
    </motion.div>
    </motion.div>
  );
};

export default Home;
