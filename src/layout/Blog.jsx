import React from "react";
import blog1 from "../assets/img/blog/blog-1-1.jpg";
import blog2 from "../assets/img/blog/blog-1-2.jpg";
import blog3 from "../assets/img/blog/blog-1-3.jpg";
import teams1 from "../assets/img/team/team-s-1-1.png";
import teams2 from "../assets/img/team/team-s-1-2.png";
import teams3 from "../assets/img/team/team-s-1-3.png";
import teams4 from "../assets/img/team/team-s-1-4.png";

function Blog() {
  return (
    <div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div
            className="title-area text-center wow fadeInUp wow-animated"
            data-wow-delay="0.3s"
            style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp" }}
          >
            <div className="sec-icon">
              <div className="vs-circle"></div>
            </div>
            <span className="sec-subtitle">BLOG AND UPDATES</span>
            <h2 className="sec-title">News &amp; Articles</h2>
          </div>
          <div
            className="row vs-carousel slick-initialized slick-slider"
            data-slide-show="2"
            data-md-slide-show="2"
          >
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{ opacity: 1, width: "5256px", transform: "translate3d(-1314px, 0px, 0px)" }}
              >
                {/* Đoạn mã cho các phần tử của carousel */}
              </div>
            </div>
          </div>
          <div className="text-center mb-30">
            <a href="blog.html" className="vs-btn style3 mt-2">
              <i className="far fa-angle-right"></i>View All News
            </a>
          </div>
        </div>
      </section>
      <section
        className="space-top space-extra-bottom background-image"
        style={{backgroundImage: `url("http://127.0.0.1:5500/educino/assets/img/bg/blog-single-divider-bg-1-1.jpg")`}}
      >
        <div className="container">
          <div className="row justify-content-between text-center text-lg-start">
            <div className="col-lg-6 mb-40 mb-lg-0">
              <h2 className="mt-n2 h2 mb-3">
                Future Learn’s Purpose is to transform access to education.
              </h2>
              <p className="mb-4 pb-2 fs-md col-xl-11">
                Sign up to our newsletter and we'll send fresh new courses and
                special offers direct to your inbox, once a week.
              </p>
              <a href="contact.html" className="vs-btn style2">
                <i className="far fa-angle-right"></i>Get a Quote
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <div className="sec-line2"></div>
            </div>
            <div className="col-lg-auto">
              <h6 className="mt-n1">Academic Leadership Team</h6>
              <div className="mini-avater">
                <a href="team-details.html">
                  <img src={teams1} alt="avater" />
                </a>
                <a href="team-details.html">
                  <img src={teams2} alt="avater" />
                </a>
                <a href="team-details.html">
                  <img src={teams3} alt="avater" />
                </a>
                <a href="team-details.html">
                  <img src={teams4} alt="avater" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
