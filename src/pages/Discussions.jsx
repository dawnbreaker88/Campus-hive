import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CommunityPage() {
  const [discussions, setDiscussions] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Load discussions from localStorage
  useEffect(() => {
    const savedDiscussions = localStorage.getItem("discussions");
    if (savedDiscussions) {
      try {
        setDiscussions(JSON.parse(savedDiscussions)); // Ensure valid JSON
      } catch (error) {
        console.error("Error parsing discussions:", error);
        setDiscussions([]); // Reset if error occurs
      }
    }
  }, []);

  // Save discussions to localStorage
  useEffect(() => {
    if (discussions.length > 0) {
      localStorage.setItem("discussions", JSON.stringify(discussions));
    }
  }, [discussions]);

  // Add new discussion
  const handlePost = () => {
    if (!title.trim() || !content.trim()) return alert("Title and Content are required!");

    const newDiscussion = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };

    setDiscussions([newDiscussion, ...discussions]);
    setTitle("");
    setContent("");
  };

  // Delete discussion
  const handleDelete = (id) => {
    const updatedDiscussions = discussions.filter((discussion) => discussion.id !== id);
    setDiscussions(updatedDiscussions);
  };

  // Dropdown function (Sort by Date/Popularity)
  const handleDropdownAction = (action) => {
    let sortedDiscussions = [...discussions];

    if (action === "Sort by Date") {
      sortedDiscussions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (action === "Sort by Popularity") {
      alert("Popularity sorting is not implemented yet!"); // Placeholder
    }

    setDiscussions(sortedDiscussions);
    setDropdownOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 bg-[#121212] text-white-xl min-h-screen px-6 py-12 mb"
    >
    
   
      <div className="bg-blue-600 px-4 py-3 text-white">
  <p className="text-center text-xl font-medium">
    
    <a href="#" className="inline-block underline">community Guidlines</a>
  </p>
</div>
    
    <div className="w-7xl py-6 pl-39">
    <div class="bg-black-100 border-t-4 border-red-500 rounded-b text-whitepx-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Our privacy policy has changed</p>
      <p class="text-sm">Make sure you follow the community guidelines and be respectful.</p>
    </div>
  </div>
</div>
      {/* Heading */}
      <h1 className="text-8xl text-[#E0E0E0] mb-10 font-poppins shimmer">community</h1>

      <p className="text-left text-[#E0E0E0] mt-1 mb-6 font-poppins text-xl typing">
      "Because staying silent never solved anything—drop your hot takes, debates,  Or just rant, that works too."
      </p>

      <h1 className="text-2xl font-bold mb-4 text-white">Community Posts</h1>

      {/* New Discussion Form */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-800 text-white shadow-md">
        <input
          className="w-full p-2 border rounded mb-2 bg-gray-700 text-white"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded mb-2 bg-gray-700 text-white"
          placeholder="Start a discussion..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handlePost}
        >
          Post Discussion
        </button>
      </div>

      {/* Dropdown Button for Sorting */}
      <div className="relative inline-block text-left mb-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Options ⬇️
        </button>

        {dropdownOpen && (
          <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg">
            <button
              onClick={() => handleDropdownAction("Sort by Date")}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Sort by Date
            </button>
            <button
              onClick={() => handleDropdownAction("Sort by Popularity")}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Sort by Popularity
            </button>
          </div>
        )}
      </div>

      {/* Discussion List */}
      <div>
        {/* Static Pinned Post */}
        <div className="p-4 border rounded my-2 bg-gray-900 text-white shadow-md">
          <h2 className="text-lg font-semibold">📌 Welcome to Notes Hub!</h2>
          <p> 🎓</p>
          <span className="text-sm text-gray-400">Admin • Pinned Post</span>
        </div>

        {/* Dynamic Discussions */}
        {discussions.length === 0 ? (
          <p className="text-gray-500">No discussions yet. Start one!</p>
        ) : (
          discussions.map((discussion) => (
            <div key={discussion.id} className="p-4 border rounded my-2 bg-gray-900 text-white shadow-md">
              <h2 className="text-lg font-semibold">{discussion.title}</h2>
              <p>{discussion.content}</p>
              <span className="text-sm text-gray-400">{discussion.createdAt}</span>
              <button
                className="ml-4 text-red-500 hover:text-red-600 transition"
                onClick={() => handleDelete(discussion.id)}
              >
                ❌ Delete
              </button>
              <button className="px-3">comments</button>
            </div>
          ))
        )}
      </div>
      
    </div>
    </motion.div>
    
  );
}
