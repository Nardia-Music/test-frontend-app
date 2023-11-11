import React, { useState } from "react";
import supabase from "../../Database/supabaseClient";

const CommentForm = ({ postId }) => {
  const [commentData, setCommentData] = useState({
    username: "",
    email:"",
    content: ""
  });
  const [commentError, setCommentError] = useState(null)

  const handleInputChange = (e) => {
      const {name, value} = e.target
        setCommentData({
            ...commentData,
            [name]:value
      })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(commentData);
   
    // Check if all requiredfields are filled
    const requiredFields = [
      "username",
      "email",
      "content",
    ];

    const errors = {};
    requiredFields.forEach((field) => {
      if (!commentData[field]) {
        errors[field] = `please fill in ${field ==="email" ? "an" : "a"} ${field}`
      }
    })

    if (Object.keys(errors).length > 0) {
      setCommentError(errors)
    } else {
      const currentDate = new Date(); // Create a new Date object with the current date and time
      const dateString = currentDate.toDateString();
      // Insert the comment into the comments table with the postId
      const { data, error } = await supabase.from("comments").upsert([
        {
          post_id: postId,
          content: commentData.content,
          username: commentData.username,
          email: commentData.email,
          created_at: dateString,
        },
      ]);

      if (error) {
        console.error("Error inserting comment:", error);
      } else {
        console.log("Comment inserted successfully:", data);
        // Clear the comment input fields
        setCommentData({
          content: "",
          username: "",
          email: "",
        });
      }
    }
   
  };

  return (
    <div className="space-y-4 my-10">
      <h1 className="text-2xl">Add New Comment</h1>
      <div className="">
        <form onSubmit={handleSubmit} className="space-y-2 my-4 ">
          <input
            onChange={handleInputChange}
            className="w-full p-2 outline-none bg-zinc-200 text-black"
            type="text"
            placeholder="Username*"
            value={commentData.username}
            name="username"
          />
          <input
            onChange={handleInputChange}
            className="w-full p-2 outline-none bg-zinc-200 text-black"
            type="email"
            placeholder="Email*"
            value={commentData.email}
            name="email"
          />
          {/* {errorMessage?.username && (
            <p className="text-red-500">{errorMessage.username}</p>
          )} */}
        
          <textarea
            onChange={handleInputChange}
            className="w-full outline-none p-2 bg-zinc-200 text-black"
            placeholder="Post*"
            id=""
            cols="30"
            rows="5"
            value={commentData.content}
            name="content"
          ></textarea>
          <button className="uppercase border p-2">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
