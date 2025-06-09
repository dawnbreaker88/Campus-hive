import React, { useState } from "react";

const Post = () => {
  const [formData, setFormData] = useState({
    type: "Lost",
    itemName: "",
    description: "",
    location: "",
    contact: "",
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
    console.log("Submitted Lost & Found Item:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Lost & Found Submission</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
            >
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg h-32 resize-none focus:outline-none"
              placeholder="Describe the item..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Last Seen / Found Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Contact Information</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
              placeholder="Email or phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Upload Image (Optional)</label>
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
            Submit Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
