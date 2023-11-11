import React, { useEffect, useState } from 'react'
import supabase from '../../Database/supabaseClient';

const DisplayComments = ({postId}) => {
    const [comments, setComments] = useState([]);

     useEffect(() => {
       const fetchComments = async () => {
           const { data, error } = await supabase
               .from("comments").select().eq("post_id", postId);

           if (error) {
               console.error("Error fetching comments:", error)
           } else {
               setComments(data)
           }
       };

       fetchComments();
     }, [postId]);
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="text-zinc-500 container mx-auto px-1">
            <div>
              <span>{comment.username}</span>: <span>{comment.content}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayComments