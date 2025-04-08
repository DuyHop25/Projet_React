import React, { useEffect, useState } from "react";
import { getProduct } from "../services/Api/product";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/shoppingCart"; // Import action để thêm vào giỏ hàng
import { Link } from "react-router-dom";
import {ToastContainer,toast } from 'react-toastify';

function Courses() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const notify = () => toast("Add Course Successful!");
  const notifyshop = () => toast("Go to cart");


  const handleGetData = async () => {
    const response = await getProduct();
    setData(response.data);
  };

  const handleShopping = () => {
    notifyshop();
  }
  
  const handleBuyClick = (product) => {
    notify();
    dispatch(addItem(product));
    console.log(product);
  };

  useEffect(() => {
    handleGetData();  
  }, []);

  function formatPrice(price) {
    return price.toLocaleString("en-US");
  }

  return (
    <div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {data.map((product, index) => (
              <div key={index} className="col-sm-6 col-xl-4">
                <div className="course-style1 has-border">
                  <div className="course-img">
                    <a href="data-details.html">
                      <img className="w-100" src={product.img} alt="Course Img" />
                    </a>
                    <div className="course-category">
                      <a href={product.category}>{product.category}</a>
                    </div>
                    <a href={product.videoLink} className="vs-btn style2 popup-video">
                      <i className="fas fa-play"></i>Preview Course
                    </a>
                  </div>
                  <div className="course-content">
                    <div className="course-top">
                      <div className="course-review">
                        {[...Array(product.rate)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                        <span>({product.rate})</span>
                      </div>
                      <span className="course-price">{product.price}$</span>
                    </div>
                    <h3 className="h5 course-name">
                      <a href="data-details.html" className="text-inherit">
                        <Link to={`/details/${product._id}`}>{product.name}</Link>
                      </a>
                    </h3>
                    <div className="course-teacher">
                      <a className="text-inherit" href={product.authorLink}>
                        By {product.author}
                      </a>
                    </div>
                  </div>
                  <div className="course-meta">
                    <span>
                      <i className="fal fa-users"></i>
                      {product.numOfStudent}
                    </span>
                    <span>
                      <i className="fal fa-clock"></i>
                      {product.time}
                    </span>
                    <span className="cart"> 
                      <span className="iconCart" onClick={() => handleShopping(product)}><Link to='/Cart'> <i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy</Link></span>
                      <span className="iconCart" onClick={() => handleBuyClick(product)}><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Card</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ToastContainer
          position="top-right"
          autoClose={1300}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
}

export default Courses;
