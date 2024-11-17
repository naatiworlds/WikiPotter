import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Characters, { loaderCharacters } from "../pages/Characters";
import Blog, { loaderBlogs } from "../pages/Blog";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import Post, { loaderPosts } from "../pages/Post";
import Character, { loaderCharacter } from "../pages/Character";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/characters",
            element: <Characters />,
            loader: loaderCharacters,

          },
          {
            path: "/character/:nickname",
            element: <Character />,
            loader: loaderCharacter,

          },
          {
            path: "/books",
            element: <Blog />,
            loader: loaderBlogs,
          },
          {
            path: "/book/:index", // Asegúrate de que el parámetro sea `id`
            element: <Post />,
            loader: loaderPosts,
          },
        ],
      },
    ],
  },
]);
