import React from 'react'
import { motion } from "framer-motion";

const Results = () => {
  return (


    <motion.div 
  initial={{ opacity: 0, y: 30, rotateX: -10 }} 
  animate={{ opacity: 1, y: 0, rotateX: 0 }} 
  exit={{ opacity: 0, y: -30, rotateX: 10 }} 
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="p-10 bg-[#121212] text-white text-xl min-h-screen px-6 py-12 mb shadow-2xl rounded-xl"
>
    <div className= "mb-19">
      <div className="bg-indigo-600 px-4 py-3 text-white">
  <p className="text-center text-xl font-medium">
    Results are  
    <a href="#" className="inline-block underline">..Live now</a>
  </p>
</div>

<div className="flex flex-col  gap-6 mt-6 px-15 py-15">
    <h1 className="flex items-center justify-left text-8xl text-[#E0E0E0] mb-10 font-hive gap-3 shimmer">
        results
        

      </h1>

      <p className="text-left text-[#E0E0E0] mt-1 mb-19 font-primary text-xl typing">
      "Results are in! Check your scores and see if it's celebration time or 'better luck next time' mode. 📜🎉
      </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6 px-10 mb-7">
  {/* Card 1 */}
  <div className="rounded-lg">
    <div className="card bg-[#171f36] text-l w-96">
      <div className="card-body">
        <h2 className="card-title text-2xl">Regular results</h2>
        <p className="text-xl">click here to check your results </p>
        <div className="card-actions justify-end">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Results
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
 
  {/* Card 3 */}
  <div className="rounded-lg">
    <div className="card bg-[#171f36] text-l w-96">
      <div className="card-body">
        <h2 className="card-title text-2xl">Supplementry results</h2>
        <p className="text-xl">click here to check your results </p>
        <div className="card-actions justify-end">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Results
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="rounded-lg">
    <div className="card bg-[#171f36] text-l w-96">
      <div className="card-body">
        <h2 className="card-title text-2xl">BBA/MBA/B,pharm</h2>
        <p className="text-xl">click here to check your results </p>
        <div className="card-actions justify-end">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Results
          </a>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
    </motion.div>
  )
}

export default Results