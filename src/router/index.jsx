/**
 * @file router.js
 * @description Configuración de las rutas de la aplicación utilizando `react-router-dom`. Este archivo define las rutas y los componentes correspondientes, 
 * así como la carga diferida (lazy loading) para optimizar el rendimiento.
 * 
 * @dependencies
 * - `react-router-dom`: Para la configuración de rutas y manejo de la navegación.
 * - `lazy`: Para cargar los componentes de manera diferida.
 * - `LayoutPublic`: Layout para las páginas públicas de la aplicación.
 * - `LayoutPrivate`: Layout para las páginas privadas, accesibles solo para usuarios autenticados.
 * - `LoaderCharacters`, `LoaderBooks`, `loaderCharacter`, `loaderBook`: Cargadores de datos para los personajes y libros, utilizados para la carga de datos antes de renderizar las páginas correspondientes.
 * 
 * @version 1.0
 * @date 2024
 */

import { createBrowserRouter } from "react-router-dom"; // Función para crear el enrutador del navegador
import { lazy } from "react"; // Para cargar componentes de manera diferida

// Cargar componentes de manera diferida (lazy loading)
const Home = lazy(() => import("../pages/Home"));
const Characters = lazy(() => import("../pages/Characters"));
const Books = lazy(() => import("../pages/Books"));
const NotFound = lazy(() => import("../pages/NotFound"));
const LayoutPublic = lazy(() => import("../layouts/LayoutPublic"));
const Book = lazy(() => import("../pages/Book"));
const Contacto = lazy(() => import("../pages/Contacto"));
const Character = lazy(() => import("../pages/Character"));

// Importación de layouts privados y cargadores
import LayoutPrivate from "../layouts/LayoutPrivate";
import Profile from "../pages/Profile";
import { LoaderCharacters } from "../loaders/LoaderCharacters";
import { LoaderBooks } from "../loaders/LoaderBooks";
import { loaderCharacter } from "../loaders/LoaderCharacter";
import { loaderBook } from "../loaders/LoaderBook";

// Definición de las rutas
export const router = createBrowserRouter([
  {
    path: "/", // Ruta base de la aplicación
    element: <LayoutPublic />, // Layout público
    errorElement: <NotFound />, // Página de error en caso de ruta no encontrada
    children: [
      {
        errorElement: <NotFound />, // Página de error para las rutas secundarias
        children: [
          {
            index: true, // Página principal
            element: <Home />, // Componente Home
          },
          {
            path: "/characters", // Ruta de personajes
            element: <Characters />, // Componente Characters
            loader: LoaderCharacters, // Cargador de datos de personajes
          },
          {
            path: "/character/:nickname", // Ruta individual de un personaje
            element: <Character />, // Componente Character
            loader: loaderCharacter, // Cargador de datos de un personaje específico
          },
          {
            path: "/books", // Ruta de libros
            element: <Books />, // Componente Books
            loader: LoaderBooks, // Cargador de datos de libros
          },
          {
            path: "/book/:title", // Ruta individual de un libro
            element: <Book />, // Componente Book
            loader: loaderBook, // Cargador de datos de un libro específico
          },
          {
            path: "/contacto", // Ruta de contacto
            element: <Contacto />, // Componente Contacto
          },
          {
            path: "/profile", // Ruta de perfil de usuario (requiere autenticación)
            element: <LayoutPrivate />, // Layout privado para páginas que requieren autenticación
            children: [
              {
                index: true, // Página de perfil
                element: <Profile />, // Componente Profile
              },
            ],
          },
        ],
      },
    ],
  },
]);
