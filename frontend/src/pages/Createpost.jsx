import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [remainingChars, setRemainingChars] = useState(250);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 250) {
      setDescription(inputText);
      setRemainingChars(250 - inputText.length);
    }
  };

  const handlePost = () => {
    // Handle post creation here
    console.log("Title:", title);
    console.log("Description:", description);
    // You can perform any further actions, such as sending data to a server
    // Reset input fields after submission
    setTitle("");
    setDescription("");
    setRemainingChars(250);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Create a new post
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 p-2 rounded-md mb-2"
            value={title}
            onChange={handleTitleChange}
          />
          <textarea
            placeholder="Description (max 250 characters)"
            className="w-full border border-gray-300 p-2 rounded-md resize-none mb-2 h-32"
            value={description}
            onChange={handleDescriptionChange}
            maxLength={250}
          />
          <p className="text-sm text-right text-gray-500">
            {remainingChars} characters remaining
          </p>
          <button
            onClick={handlePost}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
