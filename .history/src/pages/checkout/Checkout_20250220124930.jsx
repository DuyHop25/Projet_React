import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import fetchFromAPI from './fetchFromAPI'; // Import hàm gọi API

function Checkout() {
  const stripe = useStripe();

  const [product, setProduct] = useState({
    _id: "650287ec7a895a6880d60eef",
    name: "Basic - Nền tảng lập trình cho Developer",
    rate: 5,
    author: "Vũ Đình Bảo",
    price: 50,
    category: "Business",
    discount: 1500000,
    __v: 0,
    date: "2023-09-20T00:00:00.000Z",
    img: "https://cms.kmin.edu.vn/uploads/thumbnail_basic_b6ae0370e7.png",
    numOfStudent: 150,
    time: "2023-09-20T10:00:00.000Z",
    description: "dfasfdasdf",
    video: "https://www.youtube.com/watch?v=Yji1V9M4KZg",
    quantity: 1,
  });

  const changeQuantity = (v) =>
    setProduct((prev) => ({ ...prev, quantity: Math.max(0, prev.quantity + v) }));

  const handleClick = async () => {
    const body = {
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [product.img],
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        },
      ],
    };

    try {
      const { id: sessionId } = await fetchFromAPI('checkouts', { method: 'POST', body });

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      <div>
        <h3>{product.name}</h3>
        <h4>Stripe Amount: ${product.price}</h4>

        <img src={product.img} width="250px" alt="product" />

        <button onClick={() => changeQuantity(-1)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => changeQuantity(1)}>+</button>
      </div>

      <hr />

      <button onClick={handleClick} disabled={product.quantity < 1}>
        Start Checkout
      </button>
    </>
  );
}

export default Checkout;
