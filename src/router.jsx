import { createHashRouter, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Home";
import CoursesPage from "./pages/Courses";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/CartProduct";
import ProductDetails from "./layout/ProductDetails";
import Blog from "./layout/Blog";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Đây là trang mặc định khi vào "/"
        element: <Navigate to="home" />,
      },
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
