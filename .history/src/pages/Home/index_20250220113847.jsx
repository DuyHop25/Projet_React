import React, { useEffect, useState } from "react";
import HeroCarousel from "../../layout/HeroCarousel";
import Features from "../../layout/Features";
import Product from "../../layout/Product";
import TeamArea from "../../layout/TeamArea";
import EventArea from "../../layout/EventArea";
import Blog from "../../layout/Blog";
import Headers from "../../layout/Hearder";
import Footer from "../../layout/Footer";

function HomePage() {
  // const { shoppingCart } = useShopping();

  return (
    <div>
      <HeroCarousel />
      <Features />
      <Product />
      <TeamArea />
      <EventArea />
      <Blog />
    </div>
  );
}

export default HomePage;
