import React from 'react'
// import hero1 from "../img/hero/hero-1-1.jpg"
// import hero2 from "../img/hero/hero-1-2.jpg"
// import hero3 from "../img/hero/hero-1-3.jpg"

function HeroCarousel() {
  return (
    <section className="hero-layout1">
      <div className="vs-carousel" data-fade="true" data-arrows="true" data-dots="true">
        <div>
          <div className="hero-inner">
            <div className="hero-bg" data-bg-src={"hero1"} ></div>
            <div className="vs-circle animated"></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title animated">THE <span>WORLD’S #1 ONLINE</span> EDUCATION</h1>
                <p className="hero-text animated">Search over 200 individual encyclopedias and reference books from the worlds.</p>
                <div className="hero-btns animated">
                  <a href="course.html" className="vs-btn style5"><i className="far fa-angle-right"></i>Explore Courses</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;

