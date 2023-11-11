// PostDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment";

const PostDetail = ({ posts }) => {
  const { postId } = useParams();

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button>Add Comment</button>
      <Comment postId={postId} />
    </div>
  );
};

export default PostDetail;
