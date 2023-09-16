import React from 'react'
import logo from "../assets/img/logo.svg"


function Headers() {
  return (
    <>
        <header className="vs-header header-layout1">
            <div className="header-top">
                <div className="container">
                    <div className="row justify-content-between align-items-center gx-50">
                        <div className="col d-none d-xl-block">
                            <div className="header-links">
                                <ul>
                                    <li><i className="fas fa-phone-alt"></i>Phone: <a href="+4402076897888">+44 (0) 207 689 7888</a></li>
                                    <li><i className="fas fa-envelope"></i>Email: <a href="mailto:info@company.co.uk">info@company.co.uk</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-auto d-none d-md-block">
                            <a className="user-login" href="login-register.html"><i className="fas fa-user-circle"></i> Login & Register</a>
                        </div>
                        <div className="col-md-auto text-center">
                            <div className="header-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky-wrapper">
                <div className="sticky-active">
                    <div className="container position-relative z-index-common">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="vs-logo"> <a href="index.html"><img src={logo} width="250px" height="50px"  alt="logo" /></a></div>
                            </div>
                            <div className="col text-end text-xl-center">
                                <nav className="main-menu menu-style1 d-none d-lg-block">
                                    <ul>
                                        <li className="menu-item-has-children"> <a href="/home">Demos</a>
                                            <ul className="sub-menu">
                                                <li><a href="/home">Demo Style 1</a></li>
                                                <li><a href="/home">Demo Style 2</a></li>
                                                <li><a href="/home">Demo Style 3</a></li>
                                            </ul>
                                        </li>
                                        <li> <a href="about.html">About Us</a> </li>
                                        <li className="menu-item-has-children">
                                            <a href="/Courses">Courses</a>
                                            <ul className="sub-menu">
                                                <li><a href="/Courses">Courses 1</a></li>
                                                <li><a href="/Courses">Courses 2</a></li>
                                                <li><a href="/Courses">Course Details 1</a></li>
                                                <li><a href="/Courses">Course Details 2</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="blog.html">Tutor</a>
                                            <ul className="sub-menu">
                                                <li><a href="team.html">Our Tutors</a></li>
                                                <li><a href="team-details.html">Tutor Details</a></li>
                                                <li><a href="become-tutor.html">Become Tutor</a></li>
                                                <li><a href="find-tutor.html">Find Tutor</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children mega-menu-wrap"> <a href="#">Pages</a>
                                            <ul className="mega-menu">
                                                <li><a href="#">Pagelist 1</a>
                                                    <ul>
                                                        <li><a href="index.html">Demo Style 1</a></li>
                                                        <li><a href="index-2.html">Demo Style 2</a></li>
                                                        <li><a href="index-3.html">Demo Style 3</a></li>
                                                        <li><a href="about.html">About Us</a></li>
                                                        <li><a href="contact.html">Contact Us</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Pagelist 2</a>
                                                    <ul>
                                                        <li><a href="/Courses">Courses 1</a></li>
                                                        <li><a href="/Courses">Courses 2</a></li>
                                                        <li><a href="course-details.html">Courses Details 1</a></li>
                                                        <li><a href="course-details-2.html">Courses Details 2</a></li>
                                                        <li><a href="event-details.html">Event Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Pagelist 3</a>
                                                    <ul>
                                                        <li><a href="academic.html">Academic</a></li>
                                                        <li><a href="academic-program.html">Academic Program</a></li>
                                                        <li><a href="program-details.html">Program Details</a></li>
                                                        <li><a href="find-program.html">Find Program</a></li>
                                                        <li><a href="login-register.html">Login Register</a></li>
                                                        <li><a href="error.html">Error Page</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Pagelist 4</a>
                                                    <ul>
                                                        <li><a href="team.html">Our Tutors</a></li>
                                                        <li><a href="team-details.html">Tutor Details</a></li>
                                                        <li><a href="become-tutor.html">Become Tutor</a></li>
                                                        <li><a href="find-tutor.html">Find Tutor</a></li>
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </nav>
                                <button className="vs-menu-toggle d-inline-block d-lg-none"><i className="fal fa-bars"></i></button>
                            </div>
                            <div className="col-auto d-none d-xl-block">
                                <div className="header-btns">
                                    <button type="button" className="searchBoxTggler"><i className="far fa-search"></i></button>
                                    <a href="find-program.html" className="vs-btn style4"><i className="fal fa-graduation-cap"></i> Find Program</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Headers