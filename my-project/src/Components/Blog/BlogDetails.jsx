import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from './Posts/CommentForm'
import supabase from '../Database/supabaseClient';
import BlogColumn from './BlogColumn';
import "./blog.scss";
import DisplayComments from './Posts/DisplayComments';


const BlogDetails = ({comment}) => {
    const { postId } = useParams();
    const[post, setPost] = useState(null);
    const [bloburl, setBloburl] = useState(null)

    useEffect(() => {
        const fetchPostDetails = async () => {
            const { data: postData, error } = await supabase
                .from("posts_data").select().eq('id', postId).single()
            if (error) {
                console.error("Error fetching blog post details", error)
            } else {
                setPost(postData)
                // console.log(post);
                 if (postData) {
                   const { data, error } = await supabase.storage
                     .from("files")
                     .download(postData.imageurl);
                   if (data) {
                     setBloburl(URL.createObjectURL(data));
                   }

                 }
            }
        }

        fetchPostDetails();
    }, [postId])

    
  return (
    <div className=" container mx-auto">
      <div className="blog-details">
        <div>
          {post ? (
            <div className='space-y-2'>
              <img className="h-auto w-[100%]" src={bloburl} alt="" />
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <div>
                <h1 className='text-zinc-400'>Comments :</h1>
                <ul>
                    <li>
                      <DisplayComments comment={comment} postId={postId} />
                    </li>
                </ul>
              </div>
              <CommentForm postId={postId} />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <BlogColumn />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails