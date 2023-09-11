import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <h2>Courses</h2>,
      },
    ],
  },
]);
export default router;
