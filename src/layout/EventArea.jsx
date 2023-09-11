import React, { useState } from 'react'
import { Event } from '../constants/dataHome';

function EventArea() {
    const [dataEvent , setDataEvent] = useState([...Event]);
  return (
    <div>
        <section className="overflow-hidden space-top space-extra-bottom">  
        <div className="shape-mockup jump d-none d-xxl-block" data-bottom="26%" data-right="-270px">
            <div className="vs-border-circle"></div>
        </div>
        <div className="container">
            <div className="row gx-80">
                <div className="col-lg-6 col-xxl-5 pb-3 pb-lg-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="picture-box1">
                        <div className="picture-1 mega-hover"><img className="w-100" src="assets/img/about/about-1-2.jpg" alt="picture"/></div>
                        <div className="countdown-style1">
                            <span className="countdown-title">Seminar Staring Soon</span>
                            <ul className="countdown-active" data-end-date="01/12/2024">
                                <li><span className="day"></span>d</li>
                                <li><span className="hour"></span>h</li>
                                <li><span className="minute"></span>m</li>
                                <li><span className="seconds"></span>S</li>
                            </ul>
                            <a href="event-details.html" className="link-btn">Discover Now<i className="fas fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-7 align-self-center wow fadeInUp" data-wow-delay="0.2s">
                    <div className="title-area mb-40 text-center text-md-start">
                        <span className="sec-subtitle text-white">ONLINE SEMINAR AND CAMPUS EVENTS</span>
                        <h2 className="sec-title h1 text-white">Upcoming Events</h2>
                    </div>
                    {dataEvent.map((data) => (
                    <div className="event-style1">
                        <div className="event-date"><span className="day">{data.day}</span><span className="month">{data.MonthYear}</span></div>
                        <div className="event-body">
                            <h4 className="event-title"><a href="event-details.html" className="text-reset">{data.nameEvent}</a></h4>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i>{data.hour}</span>
                                <span><i className="far fa-map"></i>{data.form}</span>
                                <span><i className="far fa-user"></i>{data.Speaker}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default EventArea