import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const BlogColumn = () => {
  const comments = [
    {
      name: "Larry brazz",
      comment: "  on Nannys in UK and Europes , which to choose?",
    },
    {
      name: "Larry brazz",
      comment: "  on Nannys in UK and Europes , which to choose?",
    },
    {
      name: "Larry brazz",
      comment: "  on Nannys in UK and Europes , which to choose?",
    },
  ];
  const posts = [
    {
      name: "Larry brazz",
      post: "  on Nannys in UK and Europes , which to choose?",
    },
    {
      name: "Larry brazz",
      post: "  on Nannys in UK and Europes , which to choose?",
    },
    {
      name: "Larry brazz",
      post: "  on Nannys in UK and Europes , which to choose?",
    },
  ];

  const tags = [
    {
      tagName: "ABROAD",
    },
    {
      tagName: "ONBOARDING",
    },
    {
      tagName: "FUN ACTIVITIES",
    },
    {
      tagName: "CHILDREEN",
    },
    {
      tagName: "FAMILY",
    },
    {
      tagName: "PARENTS",
    },
    {
      tagName: "LEARNING",
    },
    {
      tagName: "BABYSITTING",
    },
    {
      tagName: "CARE",
    },
    {
      tagName: "TRAVELS",
    },
    {
      tagName: "TRIPS",
    },
    {
      tagName: "OUR BABIES",
    },
    {
      tagName: "SUMMER TRAVEL",
    },
  ];
  
    return (
      <div className="blog-column bg-black mt-24 p-8">
        <div className=" container mx-auto space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Search</h1>
            <div className=" h-[40px]  border-2 px-4 flex justify-between items-center ">
              <input
                className="bg-black  outline-none placeholder:text-white"
                type="text"
                placeholder={`Search...`}
              />
              <SearchIcon />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Popular News.</h1>
            <div className="flex items-center space-x-6">
              <img className="w-[200px]" src="/img2.webp" alt="" />
              <div>
                <p className="text-xl font-serif">Besos Sangrientos</p>
                <p className="font-mono">25.08.2019</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img className="w-[200px]" src="/img2.webp" alt="" />
              <div>
                <p className="text-xl font-serif">Besos Sangrientos</p>
                <p className="font-mono">25.08.2019</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img className="w-[200px]" src="/img2.webp" alt="" />
              <div>
                <p className="text-xl font-serif">Besos Sangrientos</p>
                <p className="font-mono">25.08.2019</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold">About.</h1>
            <p className="font-mono">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Categories.</h1>
            <p className="font-mono">Awarded</p>
            <p className="font-mono">Blockbusters</p>
            <p className="font-mono">News</p>
            <p className="font-mono">Review</p>
            <p className="font-mono">Upcoming Movies</p>
            <p className="font-mono">Winners</p>
          </div>
        </div>
      </div>
    );
};

export default BlogColumn;
