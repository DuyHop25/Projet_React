import React, { useEffect, useState } from "react";
import HeroCarousel from "../../layout/HeroCarousel";
import Features from "../../layout/Features";
import Product from "../../layout/Product";
import TeamArea from "../../layout/TeamArea";
import EventArea from "../../layout/EventArea";
import Blog from "../../layout/Blog";
import { getProduct } from "../../services/Api/product";
import useShopping from "../../hooks/useShopping";

function HomePage() {
  // const { shoppingCart } = useShopping();

  return (
    <div>
      {/* shopma
      {shoppingCart.map((item) => {
        return <div>{item}</div>;
      })} */}
{/* 
      {data.map((item, index) => (
        <div key={index}>
          <p>ID: {item._id}</p>
          <p>Name: {item.name}</p>
          <p>Rate: {item.rate}</p>
          <p>Author: {item.author}</p>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          <p>Discount: {item.discount}</p>
          {/* Render other properties as needed */}
      {/* // ))} */} 

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
