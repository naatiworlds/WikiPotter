import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { blogs } = useLoaderData();

  return (
    <ul>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li> // Usar paréntesis para retornar JSX
        ))
      ) : (
        <li>No hay blogs</li>
      )}
    </ul>
  );
};

export default Blog;

export const loaderBlogs = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Error al cargar los blogs");
    }

    const blogs = await response.json();
    return { blogs };
  } catch (error) {
    console.error(error);
    return { blogs: [] }; // Retorna un array vacío en caso de error
  }
};
