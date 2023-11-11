import React, { useState } from "react";
import supabase from "../Database/supabaseClient";

const PostForm = () => {
  const [messageData, setMessageData] = useState({
    title: "",
    username: "",
    email: "",
    mobilenumber: null,
    content: "",
    savedetails: false,
    consent: false,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setMessageData((prevMessage) => {
        return {
          ...prevMessage,
          [name]: checked,
        };
      });
    } else {
      setMessageData((prevMessage) => ({
        ...prevMessage,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageFormat = file.type 
    if (imageFormat.startsWith("image/")) {
      
      setSelectedImage(file);
    }
    else {
      console.log('Please input an image file')
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedImage)
    // Check if required fields are empty
    const requiredFields = [
      "username",
      "email",
      "title",
      "content",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (!messageData[field]) {
        errors[field] = `Please fill in ${
          field === "email" ? "an" : "a"
        } ${field}`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      
    } else {
      console.log(messageData);
      // Clear error message
      setErrorMessage(null);

      // Upload the image to Supabase Storage
      if (selectedImage) {
        const { data: fileData, error: fileError } = await supabase.storage
          .from("files")
          .upload(`public/${selectedImage.name}`, selectedImage ,{
            cacheControl: "3600",
            upsert: true,
          });
          
          if (fileError) {
            console.error("Error uploading image:", fileError);
            return;
        }
        

        const imageurl = fileData.path;
        // Set the image URL in your messageData
        setMessageData(prevMessage=>({ ...prevMessage, imageurl }));
      }

 console.log(messageData)
      // Insert data into Supabase
      const { data, error } = await supabase
        .from("posts_data")
        .upsert([messageData]);

      if (error) {
        console.error("Error inserting data:", error);
        
     try{const { data, error } = await supabase.storage
      .from("files")
      .remove([`public/${selectedImage.name}`]);
       } catch {
      console.error(error)
      }
      } else {
        
        console.log("Data inserted successfully:", data);
        // Clear the input fields
        setMessageData({
          title: "",
          username: "",
          email: "",
          mobilenumber: null,
          post: "",
          savedetails: null,
          consent: null,
          imageurl: "",
        });
      }
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Add New Post</h1>
      <div className="">
        <p className="text-xs text-zinc-400">Connect with</p>
        <div className="space-x-2 my-4">
          <span>
            <i className="fa text-xl text-blue-500 fa-facebook"></i>
          </span>
          <span>
            <i className="fa text-xl text-blue-500 fa-twitter"></i>
          </span>
        </div>
        <p className="text-xs text-zinc-400">
          Your email address will not be published. Required fields are marked *
        </p>

        <form onSubmit={handleSubmit} className="space-y-2 my-4 ">
          <input
            onChange={handleChange}
            className="w-full p-2 outline-none bg-zinc-200 text-black"
            type="text"
            placeholder="Username*"
            value={messageData.username}
            name="username"
          />
          {errorMessage?.username && (
            <p className="text-red-500">{errorMessage.username}</p>
          )}
          <input
            onChange={handleChange}
            className="w-full p-2 outline-none bg-zinc-200 text-black"
            type="email"
            placeholder="Email*"
            value={messageData.email}
            name="email"
          />
          <input
            onChange={handleChange}
            className="w-full p-2 outline-none bg-zinc-200 text-black"
            type="text"
            placeholder="Title*"
            value={messageData.title}
            name="title"
          />
          <textarea
            onChange={handleChange}
            className="w-full outline-none p-2 bg-zinc-200 text-black"
            placeholder="Post*"
            id=""
            cols="30"
            rows="5"
            value={messageData.content}
            name="content"
          ></textarea>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {errorMessage?.imageurl && (
            <p className="text-red-500">{errorMessage.imageurl}</p>
          )}
          <div>
            <input
              onChange={handleChange}
              className="bg-zinc-200"
              type="checkbox"
              value={messageData.savedetails}
              name="savedetails"
              id=""
            />{" "}
            <label htmlFor="">
              {" "}
              Save my name, email and number in this browser for the next time I
              Post
            </label>
          </div>
          <div>
            <input
              onChange={handleChange}
              className="bg-zinc-200"
              type="checkbox"
              value={messageData.consent}
              name="consent"
              id=""
            />{" "}
            <label htmlFor="">
              {" "}
              By using this form you agree with the storage and handling of your
              data by this website.{" "}
            </label>
          </div>
          <button className="">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
