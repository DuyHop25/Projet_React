import React, { useState } from 'react';
import { fetchFromAPI } from 'checkout.js';
import { useStripe } from '@stripe/react-stripe-js';

export default function Checkout() {
  const stripe = useStripe();

  const [product, setProduct] = useState({
    _id: "650287ec7a895a6880d60eef", 
    name: "Basic - Nền tảng lập trình cho Developer", 
    rate: 5, author: "Vũ Đình Bảo", 
    price: 50, category: "Business", 
    discount: 1500000, 
    __v: 0, 
    date: "2023-09-20T00:00:00.000Z", 
    img: "https://cms.kmin.edu.vn/uploads/thumbnail_basic_b6ae0370e7.png", 
    numOfStudent: 150, 
    time: "2023-09-20T10:00:00.000Z", 
    description: "dfasfdasdf", 
    video: "https://www.youtube.com/watch?v=Yji1V9M4KZg"
  });

  const changeQuantity = (v) =>
    setProduct({ ...product, quantity: Math.max(0, product.quantity + v) });

  const handleClick = async (event) => {
    const body = { line_items: [product] }
    const { id: _id } = await fetchFromAPI('checkouts', {
      body
    });

    const { id: _id } = await fetchFromAPI('checkouts', {
      body
    });

    const { error } = await stripe.redirectToCheckout({
      _id,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <>

      <div>
        <h3>{product.name}</h3>
        <h4>Stripe Amount: {product.discount}</h4>

        <img src={product.img[0]} width="250px" alt="product" />

        <button
          onClick={() => changeQuantity(-1)}>
          -
        </button>
        <span>
          {product.quantity}
        </span>
        <button
          onClick={() => changeQuantity(1)}>
          +
        </button>
      </div>

      <hr />

      <button
        onClick={handleClick}
        disabled={product.quantity < 1}>
        Start Checkout
      </button>
    </>
  );
}