import React, { useEffect, useState } from "react";
import "./blog.scss";
import { useNavigate } from "react-router-dom";
import BlogColumn from "./BlogColumn";
import BlogDisplay from "./BlogDisplay";
import supabase from "../Database/supabaseClient";
import PostForm from "./PostForm";

const Blog = () => {
  const [readMore, setReadMore] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [blogPosts, setBlogPosts] = useState(null);
  const [bloburl, setBloburl] = useState(null)
  const navigate = useNavigate()


    useEffect(() => {
      const currentDate = new Date(); // Create a new Date object with the current date and time
      const dateString = currentDate.toDateString();
    const fetchData = async () => {
      const { data: spotlightstreams, error } = await supabase
        .from("posts_data")
        .select();

      if (error) {
        setFetchError("Could not fetch Data");
        setBlogPosts(null);
        console.log(error);
      }
      if (spotlightstreams) {
        const { data, error } = await supabase.storage
          .from("files")
          .download(spotlightstreams[0].imageurl);
          if (data) {
            const imageUrl = URL.createObjectURL(data); 
              setBloburl(imageUrl);
            }

        setBlogPosts(spotlightstreams);
        setFetchError(null);
      }
    };
    fetchData();
  }, []);


  return (
    <div className=" md:container mx-auto">
      <div className="blog gap-4">
        <div className=" container mx-auto mt-24 space-y-12">
          {fetchError && <p>{fetchError}</p>}
          {blogPosts &&
            blogPosts.map((item) => (
              <div key={item.id}>
                <BlogDisplay bloburl={bloburl} readMore={readMore} item={item} />
              </div>
            ))}
          {/* <RelatedPosts /> */}
          <PostForm />
        </div>
        <div>
          <BlogColumn />
        </div>
      </div>
    </div>
  );
};

export default Blog;
