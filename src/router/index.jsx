import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Characters, { loaderCharacters } from "../pages/Characters";
import Books, { loaderBlogs } from "../pages/Books";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import Book, { loaderPosts } from "../pages/Book";
import Contacto from "../pages/Contacto";
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
            element: <Books />,
            loader: loaderBlogs,
          },
          {
            path: "/book/:index", // Asegúrate de que el parámetro sea `id`
            element: <Book />,
            loader: loaderPosts,
          },
          {
            path: "/contacto", // Asegúrate de que el parámetro sea `id`
            element: <Contacto />,
            loader: loaderPosts,
          },
        ],
      },
    ],
  },
]);
