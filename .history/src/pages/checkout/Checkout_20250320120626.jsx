import React, { useState } from 'react';

import { useStripe } from '@stripe/react-stripe-js';

export function Checkout() {
  const stripe = useStripe();

  const [product, setProduct] = useState({
    name: 'Hat',
    description: 'Pug hat. A hat your pug will love.',
    images: [
      'your-img',
    ],
    amount: 799,
    currency: 'usd',
    quantity: 0,
  });

  const changeQuantity = (v) =>
    setProduct({ ...product, quantity: Math.max(0, product.quantity + v) });

  const handleClick =  async (params) => {
    try {
      const data = await HttpRequire.get("/educino", { params });
  
      return data;
    } catch (error) {
      // Handle the error, e.g., log it or throw it to be caught higher up in your code
      
      throw error;
    }
  };
   

    const { error } = async await stripe.redirectToCheckout({
      sessionId,
    });2

    if (error) {
      console.log(error);
    }
  

  return (
    <>

      <div>
        <h3>{product.name}</h3>
        <h4>Stripe Amount: {product.amount}</h4>

        <img src={product.images[0]} width="250px" alt="product" />

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
