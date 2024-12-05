import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Cargar componentes de manera diferida
// eslint-disable-next-line react-refresh/only-export-components
const Home = lazy(() => import("../pages/Home"));
// eslint-disable-next-line react-refresh/only-export-components
const Characters = lazy(() => import("../pages/Characters"));
// eslint-disable-next-line react-refresh/only-export-components
const Books = lazy(() => import("../pages/Books"));
// eslint-disable-next-line react-refresh/only-export-components
const NotFound = lazy(() => import("../pages/NotFound"));
// eslint-disable-next-line react-refresh/only-export-components
const LayoutPublic = lazy(() => import("../layouts/LayoutPublic"));
// eslint-disable-next-line react-refresh/only-export-components
const Book = lazy(() => import("../pages/Book"));
// eslint-disable-next-line react-refresh/only-export-components
const Contacto = lazy(() => import("../pages/Contacto"));
// eslint-disable-next-line react-refresh/only-export-components
const Character = lazy(() => import("../pages/Character"));

// Importar los loaders
import LayoutPrivate from "../layouts/LayoutPrivate";
import Profile from "../pages/Profile";
import { LoaderCharacters } from "../loaders/LoaderCharacters";
import { LoaderBooks } from "../loaders/LoaderBooks";
import { loaderCharacter } from "../loaders/LoaderCharacter";
import { loaderBook } from "../loaders/LoaderBook";

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
            loader: LoaderCharacters,
          },
          {
            path: "/character/:nickname",
            element: <Character />,
            loader: loaderCharacter,
          },
          {
            path: "/books",
            element: <Books />,
            loader: LoaderBooks,
          },
          {
            path: "/book/:title",
            element: <Book />,
            loader: loaderBook,  // Este es el loader corregido
          },
          {
            path: "/contacto",
            element: <Contacto />,
          },
          {
            path: "/profile",
            element: <LayoutPrivate />,
            children: [
              {
                index: true,
                element: <Profile />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
