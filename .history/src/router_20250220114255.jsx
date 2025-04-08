import React from "react";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Home";
import CoursesPage from "./pages/Courses";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/CartProduct";
import ProductDetails from "./layout/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import Blog from "./layout/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "details/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "cart/checkout",
        element: <Checkout />,
      },
      ,
      {
        path: "Courses",
        element: <CoursesPage />, 
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
]);

export default router;