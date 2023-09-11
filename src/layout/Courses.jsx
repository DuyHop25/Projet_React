import React from 'react';
// import '../assets/img'
import { courses } from '../constants/dataHome';

function Courses() {
  return (
    <div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {courses.map((course, index) => (
              <div key={index} className="col-sm-6 col-xl-4">
                <div className="course-style1 has-border">
                  <div className="course-img">
                    <a href="course-details.html"><img className="w-100" src={course.image} alt="Course Img" /></a>
                    <div className="course-category"><a href={course.categoryLink}>{course.category}</a></div>
                    <a href={course.videoLink} className="vs-btn style2 popup-video"><i className="fas fa-play"></i>Preview Course</a>
                  </div>
                  <div className="course-content">
                    <div className="course-top">
                      <div className="course-review">
                        {[...Array(course.starRating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                        <span>({course.rating})</span>
                      </div>
                      <span className="course-price">{course.price}</span>
                    </div>
                    <h3 className="h5 course-name"><a href="course-details.html" className="text-inherit">{course.name}</a></h3>
                    <div className="course-teacher"><a className="text-inherit" href={course.teacherLink}>By {course.teacher}</a></div>
                  </div>
                  <div className="course-meta">
                    <span><i className="fal fa-users"></i>{course.students}</span>
                    <span><i className="fal fa-clock"></i>{course.duration}</span>
                    <span><i className="fal fa-calendar-alt"></i>{course.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
