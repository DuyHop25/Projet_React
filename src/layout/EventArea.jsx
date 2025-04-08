import { useState } from "react";
import { Event } from "../constants/dataHome";
// import about from "../assets/img/about/about-1-2.jpg"

function EventArea() {
  const [dataEvent, setDataEvent] = useState([...Event]);
  return (
    <div>
      <section className="overflow-hidden space-top space-extra-bottom shape-mockup-wrap">
      <div className="event-shape1"></div>
        <div className="container">
          <div className="row gx-80">
            <div
              className="col-lg-6 col-xxl-5 pb-3 pb-lg-0 wow fadeInUp wow-animated"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="picture-box1">
                <div className="picture-1 mega-hover">
                  <img
                    className="w-100"
                    src="https://cms.kmin.edu.vn/uploads/TNT_1_1_5f4b99406a.jpg"
                    alt="picture"
                  />
                </div>
                <div className="countdown-style1">
                  <span className="countdown-title">Seminar Starting Soon</span>
                  <ul className="countdown-active" data-end-date="01/12/2024">
                    <li>
                      <span className="day">122</span>d
                    </li>
                    <li>
                      <span className="hour">00</span>h
                    </li>
                    <li>
                      <span className="minute">23</span>m
                    </li>
                    <li>
                      <span className="seconds">22</span>S
                    </li>
                  </ul>
                  <a href="event-details.html" className="link-btn">
                    Discover Now<i className="fas fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xxl-7 align-self-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="title-area mb-40 text-center text-md-start">
                <span className="sec-subtitle text-white">
                  ONLINE SEMINAR AND CAMPUS EVENTS
                </span>
                <h2 className="sec-title h1 text-white">Upcoming Events</h2>
              </div>
              {dataEvent.map((data) => (
                <div className="event-style1">
                  <div className="event-date">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="event-body">
                    <h4 className="event-title">
                      <a href="event-details.html" className="text-reset">
                        {data.nameEvent}
                      </a>
                    </h4>
                    <div className="event-meta">
                      <span>
                        <i className="fas fa-clock"></i>
                        {data.hour}
                      </span>
                      <span>
                        <i className="far fa-map"></i>
                        {data.form}
                      </span>
                      <span>
                        <i className="far fa-user"></i>
                        {data.Speaker}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventArea;
