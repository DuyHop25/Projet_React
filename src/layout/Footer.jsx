import React, { useEffect, useState } from "react";
import { getProduct } from "../services/Api/product";
import logo_white from "../assets/img/logo-white.svg";
import recent_course_1 from "../assets/img/course/recent-course-1-1.jpg";

function Footer() {
  const [data, setData] = useState([]);

  const handleGetData = async () => {
    const response = await getProduct();
    setData(response.data);
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div>
      <footer className="footer-wrapper footer-layout1">
        <div
          className="shape-mockup jump d-none d-xxxl-block"
          data-bottom="0%"
          data-left="-270px"
        ></div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="vs-widget-about">
                    <div className="footer-logo">
                      {" "}
                      <a href="index.html">
                        <img src={logo_white} alt="logo" />
                      </a>{" "}
                    </div>
                    <p className="footer-text">
                      Lorem ipsum dolor sit amet, consectet rem ips dolor sit
                      amet. sum dolor sit amet, consectet e dolor sit amet,
                      comod.
                    </p>
                    <p className="footer-info">
                      <i className="fal fa-phone-alt"></i>
                      <a className="text-inherit" href="tel:++11234562228">
                        (00) 123 456 789
                      </a>
                    </p>
                    <p className="footer-info">
                      <i className="fal fa-envelope"></i>
                      <a
                        className="text-inherit"
                        href="mailto:info@example.com"
                      >
                        hello@domainname.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-xl-auto">
                <div className="widget nav_menu footer-widget">
                  <h3 className="widget_title">Study Links</h3>
                  <div className="menu-all-pages-container footer-menu">
                    <ul className="menu">
                      <li>
                        <a href="/programming_course/#course">All Courses</a>
                      </li>
                      <li>
                        <a href="/programming_course/#blog">Summer Sessions</a>
                      </li>
                      <li>
                        <a href="/programming_course/#course">Best Courses</a>
                      </li>
                      <li>
                        <a href="/programming_course/#find-tutor">Hire teachers</a>
                      </li>
                      <li>
                        <a href="academic-program.html">Program FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-xl-auto">
                <div className="widget nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container footer-menu">
                    <ul className="menu">
                      <li>
                        <a href="about.html">Community</a>
                      </li>
                      <li>
                        <a href="contact.html">Support</a>
                      </li>
                      <li>
                        <a href="blog.html">Video Guides</a>
                      </li>
                      <li>
                        <a href="event-details.html">Documentation</a>
                      </li>
                      <li>
                        <a href="about.html">Security</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget  footer-widget">
                  <h3 className="widget_title">Recent Courses</h3>
                  <div className="recent-post-wrap">
                    {data.slice(0, 2).map((item, index) => (
                      <div className="recent-course" key={index}>
                        <div className="media-img">
                          <a href="course-details.html">
                            <img src={item.img} alt="Blog Image" />
                          </a>
                        </div>
                        <div className="media-body">
                          <div className="recent-course-meta">
                            <a href="team-details.html">{item.author}</a>
                          </div>
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href="course-details.html"
                            >
                              {item.name}
                            </a>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="text-center col-lg-auto">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright"></i> 2023{" "}
                  <a href="index.html">Educino</a>. All Rights Reserved By{" "}
                  <a href="https://themeforest.net/user/vecuro_themes">
                    Vecuro
                  </a>
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <div className="social-style1">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>Facebook
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>Twitter
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>Linked In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
