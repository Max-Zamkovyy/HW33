import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getOnePost = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    };
    getOnePost();
  }, [id]);
  const callback = () => navigate(-1);
  return (
    <div>
      <button onClick={callback}>Go back</button>
      <div>Post</div>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
    </div>
  );
};

export default Post;
