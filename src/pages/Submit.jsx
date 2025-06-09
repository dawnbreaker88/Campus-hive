import React, { useState } from "react";

const Submit = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Blog:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Submit Your Blog</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
              placeholder="E.g. Tech, College Life..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg h-40 resize-none focus:outline-none"
              placeholder="Write your blog here..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Featured Image (Optional)</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all text-white font-semibold"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Submit;