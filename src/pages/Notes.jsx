import { motion } from "framer-motion";
import "../App.css";
import "../index.css";


const Notes = () => {
  return (

<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 bg-[#121212] text-white-xl min-h-screen px-15 py-15 mb"
    >
      
    <div className="flex flex-col px-1 gap-6 mt-6">
    <h1 className="flex items-center justify-left text-8xl text-[#E0E0E0] mb-10 font-hive gap-3 shimmer">
        Notes hub
        

      </h1>

      <p className="text-left text-[#E0E0E0] mt-1 mb-19 font-primary text-2xl typing">
      "Because scrambling for notes last minute is a lifestyle—why not make it easier? Share, grab, and conquer exams like a pro!"
      </p>
      {/* Notes Hub Title & Search */}
      <div className="flex items-center justify-between">
       
        {/* Search & Filter */}
        <div className="flex items-center gap-4 mt-5">
          <input
            type="text"
            placeholder="Search notes..."
            className="bg-gray-800 text-white px-4 py-2 rounded-md w-60 outline-none focus:ring-2 size-12 focus:ring-blue-500"
          />
          <button className="bg-gray-700 px-5 py-3 rounded-md text-white hover:bg-gray-600  mb- -m-1">
            Filter
          </button>
        </div>
      </div>

      {/* Section Title for Notes Grid */}
      <h2 className="text-white text-5xl font-hive mt-6">Available Notes</h2>

      {/* Notes Grid (Now properly placed below with spacing) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6 px-10">
        {/* Card 1 */}
        <div className="rounded-lg">
          <div className="card bg-[#171f36] text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-2xl">1st year notes</h2>
              <p className="text-xl">Access all notes of 1st year notes,pyqs and question papers</p>
              <div className="card-actions justify-end">
                <a
                  href="https://sites.google.com/view/studentsdigitallibrary/home/year-i?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Notes
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg">
          <div className="card bg-[#171f36] text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-2xl">2nd year notes</h2>
              <p className="text-xl">Access all notes of 2nd year notes,pyqs and question papers</p>
              <div className="card-actions justify-end">
                <a
                  href="https://sites.google.com/view/studentsdigitallibrary/home/year-ii?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Notes
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg">
          <div className="card bg-[#171f36] text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-2xl">3rd year notes</h2>
              <p className="text-xl">Access all notes of 3rd year notes,pyqs and question papers</p>
              <div className="card-actions justify-end">
                <a
                  href="https://sites.google.com/view/studentsdigitallibrary/home/year-iii?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Notes
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-lg">
          <div className="card bg-[#171f36] text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-2xl">4th year notes</h2>
              <p className="text-xl">Access all notes of 4th year notes,pyqs and question papers</p>
              <div className="card-actions justify-end">
                <a
                  href="https://sites.google.com/view/studentsdigitallibrary/home/year-iv?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Notes
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="card bg-[#171f36] text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-2xl">BBA and MBA</h2>
              <p className="text-xl">Access all notes of BBA and MBA notes,pyqs and question papers</p>
              <div className="card-actions justify-end">
                <a
                  href="https://sites.google.com/view/studentsdigitallibrary/home/year-i?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Notes
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="card bg-[#171f36] text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-2xl">B.pharm</h2>
              <p className="text-xl">Access all notes of B.pharm notes,pyqs and question papers</p>
              <div className="card-actions justify-end">
                <a
                  href="https://sites.google.com/view/studentsdigitallibrary/home/year-i?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Notes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
    <div className="text-center mt-20 mb-10">
  <h1 className="text-5xl text-white text-left font-white font-hive ">
  
    Recently updated 
  </h1>
</div>
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6 px-5 py-12">
        {/* Card 1 */}
        <div class="relative flex flex-col my-6 bg-[#1F2937] shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="p-4">
    <h5 class="mb-2 text-white text-xl font-semibold">
    Data Structures
    </h5>
    <br></br>
    <p class="text-white leading-normal font-light">
    Learn the basics of arrays, linked lists, stacks, and queues, and understand their importance in algorithm design. Essential knowledge for any programmer!
    </p>
 
    <button class="rounded-md bg-black py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>

        {/* Card 2 */}
        <div class="relative flex flex-col my-6 bg-[#1F2937] shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="p-4">
    <h5 class="mb-2 text- text-xl font-semibold">
    Machine Learning Basics
    </h5>
    <p class="text-white leading-normal font-light">
    Explore the foundational concepts like supervised and unsupervised learning, regression, classification, and basic algorithms like KNN and Decision Trees. Perfect for beginners
    </p>
 
    <button class="rounded-md bg-black py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>

        {/* Card 3 */}
        <div class="relative flex flex-col my-6 bg-[#1F2937] shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="p-4">
    <h5 class="mb-2 text-white text-xl font-semibold">
    HTML & CSS
    </h5>
    <br></br>
    <p class="text-white leading-normal font-light">
    Master the building blocks of web design. Understand the fundamentals of HTML and CSS, from structuring pages with HTML tags to styling them with CSS
    </p>
 
    <button class="rounded-md bg-black py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>

        {/* Card 4 */}
        <div class="relative flex flex-col my-6 bg-[#1F2937] shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="p-4">
    <h5 class="mb-2 text-white text-xl font-semibold">
Operating systems
    </h5>
    <p class="text-white leading-normal font-light">
    Dive into the core concepts of operating systems. Explore memory management, processes, and file systems, and gain insights into how operating systems handle hardware 
    </p>
 
    <button class="rounded-md bg-black py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>
      </div>

    
    
  </div>

  </motion.div>


    
  );
};

export default Notes;
