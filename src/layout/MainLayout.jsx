import React from 'react'
import { Outlet } from 'react-router-dom'
import Hearder from './Hearder'
import Footer from "./Footer";
import HeroCarousel from "./HeroCarousel"
import Features from './Features';
import Product from './Product';
import TeamArea from './TeamArea';
import EventArea from './EventArea';

function MainLayout() {
  return (
    <div>
        <Hearder />
        <HeroCarousel />
        <Features />
        <Product />
        <TeamArea />
        <Outlet />  
        <EventArea />
        <Footer />
    </div>
  )
}

export default MainLayout