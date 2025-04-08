import React, { useState } from 'react';
import { fetchFromAPI } from 'checkout.js';
import { useStripe } from '@stripe/react-stripe-js';

export default function Checkout() {
  const dispatch = useDispatch();
      const cartItems = useSelector(state => state.shopping);
      
      let totalCost = 0;
      let totalRate = 0;
  
   
      cartItems.forEach((item) => {
          totalCost += item.price * item.qty;
          totalRate += (item.price * item.qty * item.rate) / 100;
      });  return (
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