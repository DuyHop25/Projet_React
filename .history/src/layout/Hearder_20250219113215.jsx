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
                        <div className="col col-xl-auto d-none d-md-block shop" style={{fontSize: "1.5em"}}>
                            <a className="user-login" href="/Cart"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='orange'/></svg>Shopping</a>
                        </div>
                        <div className="col-md-auto text-center shop">
                            <a href="/dashboard"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. <path d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z" 
                                 fillter='#f5deb3'/></svg></a>
                                 
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