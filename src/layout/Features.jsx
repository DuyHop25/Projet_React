import React, { useState } from "react";
import "../css/global.css";
import about from "../img/about/about-1-1.jpg";
import author from "../img/about/author-1-1.png";

import { course } from "../constants/dataHome";

function Features() {
  const [dataCourse, SetCourse] = useState([...course]);


  return (
    <>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div
            className="row vs-carousel wow fadeInUp"
            data-wow-delay="0.4s"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-md-slide-show="2"
            data-sm-slide-show="2"
            data-center-mode="true"
            data-xl-center-mode="true"
            data-ml-center-mode="true"
          >
            {dataCourse   .map((i, index) => (
              <div key={index} className="col-sm-6 col-xl-4">
                <div className="feature-style1">
                  <div className="feature-icon">
                    <img src={i.img} alt="Feature Icon" />
                    <div className="vs-circle"></div>
                  </div>
                  <h4 className="feature-title">
                    <a href="about.html" className="text-inherit">
                      {i.title}
                    </a>
                  </h4>
                  <p className="feature-text">{i.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden space-extra-bottom">
        <div
          className="shape-mockup jump-img d-hd-none d-none d-xxxl-block"
          data-left="-15%"
          data-top="2%"
        >
          <div className="vs-border-circle"></div>
        </div>
        <div
          className="shape-mockup jump-reverse d-none d-xxxl-block"
          data-right="7%"
          data-top="38%"
        >
          <div className="shape-dotted"></div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-9 wow fadeInUp" data-wow-delay="0.3s">
              <div className="title-area">
                <div className="sec-icon">
                  <span className="vs-circle"></span>
                </div>
                <span className="sec-subtitle">WELCOME TO GLOBAL EDUCATION</span>
                <h2 className="sec-title h1">
                  Take Your Learning Organization to The Next Level.
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-70">
            <div className="col-lg-7 col-xxl-7">
              <div className="img-box3">
                <div className="img-1 mega-hover">
                  <img className="w-100" src={about} alt="About Img" />
                </div>
                <div className="shape-dotted jump"></div>
              </div>
            </div>
            <div className="col-lg-5 col-xxl-4 align-self-center">
              <p className="fs-md">
                Ducamb welcomed every pain avoided but in certain circumstances
                owing to the claims of igation that off business it will
                frequently occu the obligations of business it will frequently
                of curs that pleasures.
              </p>
              <p className="fs-md">
                Certain circumstances owing to claims duty o our free hours when
                our power of choice is not prevents.
              </p>
              <div className="media-style1">
                <div className="media-img">
                  <img src={author} alt="About Author" />
                </div>
                <div className="media-body">
                  <span className="media-label">Thomas Walkar</span>
                  <p className="media-info">President, Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
