import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./assets/css/index.css";
import router from "./router";

function App() {

  return  ( 
  <>
    <RouterProvider router={router} />;
  </>)
}

export default App;
