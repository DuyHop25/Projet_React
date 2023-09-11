import React from "react";
import HeroCarousel from "../../layout/HeroCarousel";
import Features from "../../layout/Features";
import Product from "../../layout/Product";
import TeamArea from "../../layout/TeamArea";
import EventArea from "../../layout/EventArea";

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Features />
      <Product />
      <TeamArea />
      <EventArea />
    </>
  );
}

export default HomePage;
