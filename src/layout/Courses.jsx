import React, { useEffect, useState } from "react";
import { getProduct } from "../services/Api/product";

function Courses() {
  const [data, setData] = useState([]);

  const handleGetData = async () => {
    const response = await getProduct();
    setData(response.data);
  };

  function  formatPrice(price) {
    // Sử dụng hàm toLocaleString để thêm dấu phẩy ngăn cách hàng nghìn
    return price.toLocaleString("en-US");
  }

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {data.map((data, index) => (
              <div key={index} className="col-sm-6 col-xl-4">
                <div className="course-style1 has-border">
                  <div className="course-img">
                    <a href="data-details.html">
                      <img
                        className="w-100"
                        src="https://kmin.edu.vn/assets/images/back-end.png"
                        alt="Course Img"
                      />
                    </a>
                    <div className="course-category">
                      <a href={data.category}>{data.category}</a>
                    </div>
                    <a
                      href={data.videoLink}
                      className="vs-btn style2 popup-video"
                    >
                      <i className="fas fa-play"></i>Preview Course
                    </a>
                  </div>
                  <div className="course-content">
                    <div className="course-top">
                      <div className="course-review">
                        {[...Array(data.rate)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                        <span>({data.rate})</span>
                      </div>
                       <span className="course-price">{formatPrice(data.price)} VND</span>
                    </div>
                    <h3 className="h5 course-name">
                      <a href="data-details.html" className="text-inherit">
                        {data.name}
                      </a>
                    </h3>
                    <div className="course-teacher">
                      <a className="text-inherit" href={data.authorLink}>
                        By {data.author}
                      </a>
                    </div>
                  </div>
                  <div className="course-meta">
                    <span>
                      <i className="fal fa-users"></i>
                      {100}
                    </span>
                    <span>
                      <i className="fal fa-clock"></i>
                      {100}
                    </span>
                    <span>
                      <i className="fal fa-calendar-alt"></i>
                      {100}
                    </span>
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
