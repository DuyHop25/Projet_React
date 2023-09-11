import React, { useState } from 'react'
import "../css/global.css";
import { product } from '../constants/dataHome';

function Product() {
    // const [dataProduct ,setProduct] = useState([...product]);
  return (
    <div>
    <section className=" space-bottom">
        <div className="container">
            <div className="row align-items-center justify-content-center justify-content-xl-between flex-row-reverse">
                <div className="col-xl-5 col-xxl-auto wow fadeInUp" data-wow-delay="0.3s">
                    <div className="img-box1">
                        <div className="vs-circle">
                            <div className="mega-hover">
                                <img src="assets/img/about/about-1-1.png" alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-xxl text-center text-xl-start">
                    <form action="#" className="form-style1">
                        <h2 className="form-title h1">Search Your Program</h2>
                        <div className="row">
                            <div className="form-group col-auto">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label htmlFor="inlineRadio1">Undergraduate Programs</label>
                            </div>
                            <div className="form-group col-auto">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked />
                                <label htmlFor="inlineRadio2">Graduate Programs</label>
                            </div>
                            <div className="form-group col-12">
                                <div className="form-inner">
                                    <input type="text" placeholder="Enter your email address..." />
                                    <button className="icon-btn"><i className="fal fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="row gx-40 justify-content-center justify-content-xl-start">
                        <div className="col-auto">
                            <div className="media-style3">
                                <div className="media-icon"><i className="far fa-graduation-cap"></i></div>
                                <div className="media-body">
                                    <span className="media-title">8,000 online courses</span>
                                    <p className="media-text">Explore a variety of fresh topics</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="media-style3">
                                <div className="media-icon"><i className="fas fa-user-tie"></i></div>
                                <div className="media-body">
                                    <span className="media-title">Expert Instruction</span>
                                    <p className="media-text">Find the right instructor htmlFor you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section className="space-top space-extra-bottom" data-bg-src="assets/img/bg/course-bg-pattern.jpg">
        <div className="container-lg">
            <div className="title-area text-center wow fadeInUp" data-wow-delay="0.3s">
                <div className="sec-icon">
                    <div className="vs-circle"></div>
                </div>
                <span className="sec-subtitle">WELCOME TO GLOBAL EDUCATION</span>
                <h2 className="sec-title">Explore Courses</h2>
            </div>
            <div className="row vs-carousel wow fadeInUp" data-wow-delay="0.4s" data-slide-show="3" data-lg-slide-show="2" data-md-slide-show="2" data-sm-slide-show="2" data-center-mode="true" data-dots="true">
                {product.map((i) => (
                <div className="col-sm-6 col-xl-4">
                    <div className="course-style1">
                        <div className="course-img">
                            <a href="course-details.html"><img className="w-100" src={i.img} alt="Course Img" /></a>
                            <div className="course-category"><a href="course.html">{i.majors}</a></div>
                            <a href={i.video} className="vs-btn style2 popup-video"><i className="fas fa-play"></i>Preview Course</a>
                        </div>
                        <div className="course-content">
                            <div className="course-top">
                                <div className="course-review"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>(5.0)</div>
                                <span className="course-price">{i.price}</span>
                            </div>
                            <h3 className="h5 course-name"><a href="course-details.html">{i.CourseName}</a></h3>
                            <div className="course-teacher"><a href="team-details.html" className="text-inherit"> {i.Teacher}</a></div>
                        </div>
                        <div className="course-meta">
                            <span><i className="fal fa-users"></i>{i.numOfStud}</span>
                            <span><i className="fal fa-clock"></i>{i.hour}</span>
                            <span><i className="fal fa-calendar-alt"></i>{i.date}</span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    </div>
  )
}

export default Product