import React from "react";
import { Link } from "react-router-dom";

const BlogDisplay = ({ item , bloburl }) => {
      const handleReadMore = () => {
        URL.revokeObjectURL(bloburl)
      };
  return (
    <div>
      <div className="space-y-6 px-2">
        <img className="w-full h-96" src={bloburl} alt="" />
        <p className="font-mono text-xl hover:text-green-800 capitalize">
          {item.title}
        </p>
        <div className="space-x-4 text-zinc-500">
          <span className="text-sm hover:text-orange-400 text-green-700">
            POST
          </span>
          :
          <span className="text-sm hover:text-orange-400">
            {item.created_at}
          </span>{" "}
          /
          <span className="text-sm hover:text-orange-400">
            <span>
              <i class="fa-regular fa-comment"></i>
            </span>
            2
          </span>{" "}
        </div>
        <p className="capitalize">{item.content.substring(0, 200)}</p>
      </div>
      <div className="button">
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
        <span className="line-4"></span>
        <span className="line-5"></span>
        <span className="line-6"></span>
         <Link
          onClick={handleReadMore}
          className=""
          to={`/blogdetails/${item.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogDisplay;
