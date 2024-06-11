import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
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
    axios
      .post("http://127.0.0.1:8000/createpost", {
        title: title,
        description: description,
      })
      .then((response) => {
        console.log("Post created successfully:", response.data);
        setTitle("");
        setDescription("");
        setRemainingChars(250);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
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

export default CreatePost;
