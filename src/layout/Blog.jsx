// import teams1 from "../assets/img/team/team-s-1-1.png";
// import teams2 from "../assets/img/team/team-s-1-2.png";
// import teams3 from "../assets/img/team/team-s-1-3.png";
// import teams4 from "../assets/img/team/team-s-1-4.png";
import { Event, QualifiedTeachers } from "../constants/dataHome";

function Blog() {
  return (
    <div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div
            className="title-area text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="sec-icon">
              <div className="vs-circle"></div>
            </div>
            <span className="sec-subtitle">BLOG AND UPDATES</span>
            <h2 className="sec-title">News &amp; Articles</h2>
          </div>
          <div
            className="row vs-carousel"
            data-slide-show="2"
            data-md-slide-show="2"
          >
            {/* Sử dụng map để lặp qua danh sách bài viết và hiển thị chúng */}
            {Event.slice(0, 2).map((post, index) => (
              <div className="col-lg-6" key={index}>
                <div className="vs-blog blog-style1">
                  <div className="blog-img">
                    <img className="w-100" src={post.img} alt="Blog Img" />
                  </div>
                  <div className="blog-content">
                    <div className="date-box">
                      <span className="day">{post.day}</span>
                      <span className="month">{post.MonthYear}</span>
                      <span className="post-comment">
                        {post.comments} Comments
                      </span>
                    </div>
                    <h4 className="blog-title">
                      <a href={post.link}>{post.nameEvent}</a>
                    </h4>
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
        style={{
          backgroundImage: `url("http://127.0.0.1:5500/educino/assets/img/bg/blog-single-divider-bg-1-1.jpg")`,
        }}
      >
        <div className="container">
          <div className="row justify-content-between text-center text-lg-start">
            <div className="col-lg-6 mb-40 mb-lg-0">
              <h2 className="mt-n2 h2 mb-3">
                Future Learn’s Purpose is to transform access to education.
              </h2>
              <p className="mb-4 pb-2 fs-md col-xl-11">
                Sign up to our newsletter and we will send fresh new courses and
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
                {QualifiedTeachers.map((item, index) => (
                  <a href="team-details.html" key={index}>
                    <img src={item.img} alt="avater" style={{width:"90px", height:"90px"}}/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
