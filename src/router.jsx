import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Home";
import CoursesPage from "./pages/Courses";

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
        element: <CoursesPage />
      },
    ],
  },
]);
export default router;
