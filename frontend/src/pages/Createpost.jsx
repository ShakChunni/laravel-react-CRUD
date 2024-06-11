import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Title:", title);
    console.log("Description:", description);
    // You can perform any further actions, such as sending data to a server
    // Reset input fields after submission
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to React with Laravel
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 p-2 rounded-md mr-2"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Description"
            className="border border-gray-300 p-2 rounded-md mr-2"
            value={description}            onChange={handleDescriptionChange}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
