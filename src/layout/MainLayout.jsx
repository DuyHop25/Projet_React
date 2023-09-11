import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hearder from "./Hearder";

function MainLayout() {
  return (
    <>
      <Hearder />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
