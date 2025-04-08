import React, { useEffect, useState } from "react";
import { Card, Row, Col, Image, Button } from "antd";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/slices/shoppingCart";
import { getDetailProduct } from "../services/Api/product";
import '../assets/css/productDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const notify = () => toast("Add Course Successful!");

  const handleBuyClick = (product) => {
    notify();
    dispatch(addItem(product));
  };

  const handleGetData = async () => {
    try {
      const response = await getDetailProduct(id);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, [id]);

  return (
    <div className="container__details">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            hoverable
            cover={<Image src={data.img} alt={data.name} />
            }
          >
            <Card.Meta title={data.name} />
          </Card>
        </Col>
        <Col span={12}>
          <h2>{data.name}</h2>
          <p>Description: <span>{data.description}</span></p>
          <p>Author: <span>{data.author}</span></p>
          <p>Rate: <span>{data.rate}</span></p>
          <p>Price: <span>${data.price}</span></p>
          <p>Category: <span>{data.category}</span></p>
          <span className="iconCart_dt">
            <Link to="/Cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy
            </Link>
          </span>
          <span className="iconCart_dt" onClick={() => handleBuyClick(data)}>
            <i className="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart
          </span>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
