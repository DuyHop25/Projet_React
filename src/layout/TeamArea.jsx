import React from "react";
import divider_bg from "../assets/img/bg/divider-bg-1-1.jpg";


import { QualifiedTeachers } from "../constants/dataHome";
function TeamArea() {
  return (
    <>
      <section
        className="background-image"
        data-bg-src={divider_bg}
        style={{ backgroundImage: `url(${divider_bg})` }}
      >
        <div className="container">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-lg-5 col-xl-6 space-extra">
              <h2 className="sec-title text-white mb-3">Expert instruction</h2>
              <p className="fs-md text-white">
                Find the right instructor for you from over 10,000 teachers
              </p>
              <div className="row gx-60 mb-4 pb-xl-3 text-start justify-content-center justify-content-lg-start">
                <div className="col-auto col-lg-12 col-xl-auto">
                  <div className="list-style4 vs-list ">
                    <ul className="list-unstyled m-0">
                      <li>Hand-picked authors</li>
                      <li>Easy to follow curriculum</li>
                    </ul>
                  </div>
                </div>
                <div className="col-auto col-lg-12 col-xl-auto">
                  <div className="list-style4 vs-list ">
                    <ul className="list-unstyled m-0">
                      <li>Free courses</li>
                      <li>Money-back guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a href="team.html" className="vs-btn style5">
                <i className="far fa-angle-right"></i>Find Our Teachers
              </a>
            </div>
            <div className="col-lg-7 col-xl-6 align-self-end">
              <div className="img-box2">
                <div className="vs-circle"></div>
                <img className="img-1" src="https://cms.kmin.edu.vn/uploads/4_e7bc613599.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div
            className="title-area text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="sec-icon">
              <div className="vs-circle"></div>
            </div>
            <span className="sec-subtitle">IDEAL TUTOR FOR EVERYONE</span>
            <h2 className="sec-title h1">Qualified Teachers</h2>
          </div>

          <div
            className="row vs-carousel wow fadeInUp gx-40"
            data-wow-delay="0.4s"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-md-slide-show="2"
            data-sm-slide-show="2"
            data-center-mode="true"
          >
            {QualifiedTeachers.slice(0,3).map((i) => (
              <div className="col-sm-6 col-lg-4">
                <div className="team-style1">
                  <div className="team-img">
                    <img className="w-100" src={i.img} alt="teacher" />
                  </div>
                  <div className="team-content">
                    <div className="team-review">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="team-name">
                      <a href="team-details.html">{i.name}</a>
                    </h4>
                    <p className="team-degi">{i.subject}</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="space-bottom">
        <div className="container text-center">
            <span className="sec-subtitle2">You can list your <b><u>partners or instructor's</u></b> brands here!</span>
            <div className="row vs-carousel wow fadeInUp" data-wow-delay="0.4s" data-slide-show="5" data-lg-slide-show="4" data-md-slide-show="3" data-sm-slide-show="2">
                <div className="col-auto"><img src="https://tse1.mm.bing.net/th?id=OIP.C2n480dSfal6Pw4HVOKbGwAAAA&pid=Api&P=0&h=180" alt="brand"/></div>
                <div className="col-auto"><img src="https://tse2.explicit.bing.net/th?id=OIP.lmffNjeSaF4tPbOiYNgD2QHaHa&pid=Api&P=0&h=180" alt="brand"/></div>
                <div className="col-auto"><img src="https://tse1.mm.bing.net/th?id=OIP.EZyBdo3Wgo3b370BwIOMLAHaEK&pid=Api&P=0&h=180" alt="brand"/></div>
                <div className="col-auto"><img src="https://tse1.mm.bing.net/th?id=OIP.E46V50MHRxz9A81_s_Eh7AAAAA&pid=Api&P=0&h=180" alt="brand"style={{width:"150px" ,height:"110px"}}/></div>
                <div className="col-auto"><img src="https://tse2.mm.bing.net/th?id=OIP.UKDq5ptr_orT9pcpWc1wcgHaD8&pid=Api&P=0&h=180" alt="brand" style={{width:"100px" ,height:"100px"}}/></div>
            </div>
        </div>
    </div>
    </>
  );
}

export default TeamArea;
