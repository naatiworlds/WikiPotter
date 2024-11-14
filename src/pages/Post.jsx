import React from "react";
import { useLoaderData } from "react-router-dom";

const Post = () => {
    const { post } = useLoaderData();
    console.log(post)
    return (
      <div>
        <h1>Posts</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    );
};

export default Post;

export const loaderPosts = async ({params}) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (!response.ok) {
      throw new Error("Error al cargar los blogs");
    }

    const post = await response.json();
    return { post };
  } catch (error) {
    console.error(error);
    return { post: [] }; // Retorna un array vacío en caso de error
  }
};
