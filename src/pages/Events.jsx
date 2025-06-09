import { motion } from "framer-motion";
import "../App.css";
import "../index.css";

const Events = () => {
  
  
  return (
   <motion.div 
         initial={{ opacity: 0, y: 20 }} 
         animate={{ opacity: 1, y: 0 }} 
         exit={{ opacity: 0, y: -20 }} 
         transition={{ duration: 0.5 }}
         className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb"
       >
    <div className="flex flex-col  gap-6 mt-7 px-20 py20">
    <h1 className="flex items-center justify-left text-8xl text-[#E0E0E0] mb-10 font-poppins gap-3 shimmer">
        Events
        

      </h1>

      <p className="text-left text-[#E0E0E0] mt-1 mb-19 font-primary text-xl typing">
      "Missed an event? Don’t worry, FOMO will remind you. Stay updated, show up, and pretend you totally planned to be there all along. Or just scroll and regret later."
      </p>


     
      <div className="text-left mt-1 mb-4">
  <h1 className="text-5xl text-white font-primary ">
  
    Live events
  </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {[
          {
            img: "innoo.png",
            date: "27TH-28TH FEB",
            title: "INNOQUEST#2",
            description: "Hackathon exclusively for first years in collaboration with Microsoft. Learn about AI and Copilot and build your ideas!",
            venue: "VENUE - E-block Auditorium"
          },
          {
            img: "synta.png",
            date: "28TH FEB",
            title: "SYNTAX ERROR",
            description: "Are you ready to put your coding skills to the test? Club Coding Cubs presents SYNTAX ERROR, ",
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
                  href="https://drive.google.com/ml-notes-link"
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
      <div className="text-left mt-1 mb-4">
  <h1 className="text-5xl text-white font-primary ">
  
    Upcoming events
  </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {[
          {
            img: "spk.png",
            date: "27TH-28TH FEB",
            title: "SPEAK-A-THON",
            description: "Get ready for an electrifying SPEAKATHON at Toastmasters Meeting #154! This is your golden opportunity ",
            venue: "VENUE - E-block Auditorium"
          },
          {
            img: "sci.png",
            date: "15th Oct 2022",
            title: "National science day",
            description: " science day celebrations by DEPT of physics and chemistry particpate ion poster making and many more ",
            venue: "VENUE - D Block"
          },
          {
            img: "tedx.png",
            date: "15th Oct 2022",
            title: "TEDxANURAGu",
            description: "TEDxANURAGu 7th edition with more seats and guests. Book your tickets now group passes are out now so hurry up!!!",
            venue: "VENUE - TBA"
          },
          
        ].map((event, index) => (
          <article key={index} className="overflow-hidden rounded-lg shadow-sm transition-all hover:scale-105">
            <img src={event.img} className="h-56 w-full object-cover" alt={event.title} />
            <div className="bg-[#1F2937] p-4">
              <time className="block text-lg text-gray-400">{event.date}</time>
              <h3 className="mt-2 text-2xl text-white">{event.title}</h3>
              <p className="mt-2 text-lg text-white">{event.description}</p>
              <p className="mt-2 text-lg text-white font-semibold">{event.venue}</p>
              <a 
                  href="https://drive.google.com/ml-notes-link"
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
      <div className="text-left mt-1 mb-4">
  <h1 className="text-5xl text-white font-primary ">
   Hackathons
  </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {[
           {
            img: "vis.png",
            date: "15th Oct 2022",
            title: "VISIONNOVA",
            description: " 1st Edition – a 24-HOUR NATIONAL-LEVEL HACKATHON + BOOTCAMP !",
            venue: "VENUE -  E Block, Anurag University"
          },
          { 
            img: "r.png",
            date: "1ST MARCH",
            title: "INNOVATEBOT",
            description: "Are you interested in ROBOTICS? Then get ready to showcase your skills, unleash your creativity, ",
            venue: "VENUE - TBA"
          },
       
         
        ].map((event, index) => (
          <article key={index} className="overflow-hidden rounded-lg shadow-sm transition-all hover:scale-105">
            <img src={event.img} className="h-56 w-full object-cover" alt={event.title} />
            <div className="bg-[#2A2A2A] p-4">
              <time className="block text-lg text-gray-400">{event.date}</time>
              <h3 className="mt-2 text-2xl text-white">{event.title}</h3>
              <p className="mt-2 text-lg text-white">{event.description}</p>
              <p className="mt-2 text-lg text-white font-semibold">{event.venue}</p>
              <a 
                  href="https://drive.google.com/ml-notes-link"
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
      
      </div>
      

    
    
  

      </motion.div>
    
  
      
    
  )
}

export default Events