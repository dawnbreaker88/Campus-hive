import React from 'react'
import { motion } from "framer-motion";

const News = () => {
  return (
    
<motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }}
      className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb"
    >



    <div className="flex flex-col  gap-6 mt-7 px-12 py-12">
    <h1 className="flex items-center justify-left text-8xl text-[#E0E0E0] mb-10 font-hive gap-3 shimmer">
        News

      </h1>

      <p className="text-left text-[#E0E0E0] mt-1 mb-19 font-primary text-xl typing">
      "Urgent update: That thing you missed, no one really cares about it anymore."


      </p>
      <div className="text-left mt-1 mb-4">
  <h1 className="text-5xl text-white font-primary ">
   Campus news
  </h1>
</div>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6 px-10">
      


        {/* Card 1 */}
        <div className="rounded-lg">
         
         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
   <img
     alt=""
     src="https://images.unsplash.com/photo-1549861833-7a62a4a84484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJpem9uYSUyMHN0YXRlJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
     className="h-56 w-full object-cover"
   />
 
 <div className="bg-[#1F2937] p-4 sm:p-6">
     <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>
 
     <a href="#">
       <h3 className="mt-0.5 text-2xl text-white-900">Anurag university collab with ASU</h3>
     </a>
     <br></br>
 
     <p className="mt-2 line-clamp-3 text-xl text-white ">
     Anurag university collabs with ASu and launh two international programs
     </p>
     <a 
                   href="https://drive.google.com/ml-notes-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn px-1 mt-2 collapse-arrow bg-black"
                 >
                   Read more
                 </a>
   </div>
   
 </article>
         </div>

        {/* Card 2 */}
        <div className="rounded-lg">
         
        <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1641352848874-c96659e03144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kb29yJTIwc3BvcnRzJTIwY29tcGxleHxlbnwwfHwwfHx8MA%3D%3D"
    className="h-56 w-full object-cover"
  />

<div className="bg-[#1F2937] p-4 sm:p-6">
    <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>

    <a href="#">
      <h3 className="mt-0.5 text-2xl text-white-900">Sports Complex Gets Major Upgrade</h3>
    </a>
    <br></br>

    <p className="mt-2 line-clamp-3 text-xl text-white ">
    The university's much-anticipated annual  Fest will take place on march 13 and registrations are open for competations
    </p>
    <a 
                  href="https://drive.google.com/ml-notes-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-1 mt-2 collapse-arrow bg-black"
                >
                  Read more
                </a>
  </div>
  
</article>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg">
         
         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
   <img
     alt=""
     src="https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lmaXxlbnwwfHwwfHx8MA%3D%3D"
     className="h-56 w-full object-cover"
   />
 
 <div className="bg-[#1F2937] p-4 sm:p-6">
     <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>
 
     <a href="#">
       <h3 className="mt-0.5 text-2xl text-white-900">Campus WiFi Upgrade Promises More Stable Connection</h3>
     </a>
     <br></br>
 
     <p className="mt-2 line-clamp-3 text-xl text-white ">
     The IT department has upgraded the campus WiFi system 
     </p>
     <a 
                   href="https://drive.google.com/ml-notes-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn px-1 mt-2 collapse-arrow bg-black"
                 >
                   Read more
                 </a>
   </div>
   
 </article>
         </div>
 

        {/* Card 4 */}
        <div className="rounded-lg">
         
         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
   <img
     alt=""
     src="https://images.unsplash.com/photo-1636792558335-cfb8a5fb8b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
     className="h-56 w-full object-cover"
   />
 
 <div className="bg-[#1F2937] p-4 sm:p-6">
     <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>
 
     <a href="#">
       <h3 className="mt-0.5 text-2xl text-white-900">NSS  Aims to Tackle Campus Sustainability Challenges</h3>
     </a>
     <br></br>
 
     <p className="mt-2 line-clamp-3 text-xl text-white ">
     National Service Scheme (NSS) at Anurag University has launched its much-anticipated "Eco Drive," an initia
     </p>
     <a 
                   href="https://drive.google.com/ml-notes-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn px-1 mt-2 collapse-arrow bg-black"
                 >
                   Read more
                 </a>
   </div>
   
 </article>
         </div>
 
      </div>
           
    <div className="text-left mt-1 mb-4">
  <h1 className="text-5xl text-white font-primary ">
   Tech news
  </h1>
</div>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6 px-10 mb-5">
      


        {/* Card 1 */}
        <div className="rounded-lg">
         
         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
   <img
     alt=""
     src="https://images.unsplash.com/photo-1678483789105-2720201bee03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hBVCUyMEdQVHxlbnwwfHwwfHx8MA%3D%3D"
     className="h-56 w-full object-cover"
   />
 
 <div className="bg-[#1F2937] p-4 sm:p-6">
     <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>
 
     <a href="#">
       <h3 className="mt-0.5 text-2xl text-white-900">GPT-5 Announced</h3>
     </a>
     <br></br>
 
     <p className="mt-2 line-clamp-3 text-xl text-white ">
     OpenAI has unveiled GPT-5, advancing natural language understanding and generation. With improved accuracy, fluency, and contextual awareness,
     </p>
     <a 
                   href="https://drive.google.com/ml-notes-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn px-1 mt-2 collapse-arrow bg-black"
                 >
                   Read more
                 </a>
   </div>
   
 </article>
         </div>

        {/* Card 2 */}
        <div className="rounded-lg">
         
         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
   <img
     alt=""
     src="https://plus.unsplash.com/premium_photo-1700942979302-72ef87e43525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVhbnR1bXxlbnwwfHwwfHx8MA%3D%3D"
     className="h-56 w-full object-cover"
   />
 
 <div className="bg-[#1F2937] p-4 sm:p-6">
     <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>
 
     <a href="#">
       <h3 className="mt-0.5 text-2xl text-white-900">Quantum Computing</h3>
     </a>
     <br></br>
 
     <p className="mt-2 line-clamp-3 text-xl text-white ">
     Researchers at MIT have achieved a major leap in quantum error correction. This advancement improves the stability and accuracy of quantum computers
     </p>
     <a 
                   href="https://drive.google.com/ml-notes-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn px-1 mt-2 collapse-arrow bg-black"
                 >
                   Read more
                 </a>
   </div>
   
 </article>
         </div>
         <div className="rounded-lg">
         
         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
   <img
     alt=""
     src="https://images.unsplash.com/photo-1665799871677-f1fd17338b43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZWJvb2slMjBtZXRhfGVufDB8fDB8fHww"
     className="h-56 w-full object-cover"
   />
 
 <div className="bg-[#1F2937] p-4 sm:p-6">
     <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>
 
     <a href="#">
       <h3 className="mt-0.5 text-2xl text-white-900">Meta's new AI system </h3>
     </a>
     <br></br>
 
     <p className="mt-2 line-clamp-3 text-xl text-white ">
     Meta's new AI system excels in real-time 3D graphics rendering, significantly reducing rendering time while enhancing visual fidelity
     </p>
     <a 
                   href="https://drive.google.com/ml-notes-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn px-1 mt-2 collapse-arrow bg-black"
                 >
                   Read more
                 </a>
   </div>
   
 </article>
         </div>

        {/* Card 4 */}
        <div className="rounded-lg">
         
         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
   <img
     alt=""
     src="https://images.unsplash.com/photo-1704089272382-201cf5c1bbbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdCUyMGxvZ298ZW58MHx8MHx8fDA%3D"
     className="h-56 w-full object-cover"
   />
 
 <div className="bg-[#1F2937] p-4 sm:p-6">
     <time datetime="2022-10-10" className="block text-m text-white"> 10th Oct 2022 </time>
 
     <a href="#">
       <h3 className="mt-0.5 text-2xl text-white-900">Copilot for Software Development</h3>
     </a>
     
 
     <p className="mt-2 line-clamp-3 text-xl text-white ">
     Microsoft has introduced an AI-driven copilot to assist developers with code generation and debugging. 
     </p>
     <a 
                   href="https://drive.google.com/ml-notes-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn px-1 mt-2 collapse-arrow bg-black"
                 >
                   Read more
                 </a>
   </div>
   
 </article>
         </div>
      </div>
      <section className="py-20 mx-auto container max-w-4xl px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <h1 className="text-gray-500 font-semibold">
          Stay in the Know: Subscribe for Exclusive Updates
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
    
    
    </div>                 

    </motion.div>
  )
}

export default News