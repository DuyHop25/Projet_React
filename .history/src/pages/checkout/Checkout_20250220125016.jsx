import React, { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import fetchFromAPI from './fetchFromAPI'; // Import hàm gọi API

function Checkout() {
  const stripe = useStripe();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API để lấy thông tin sản phẩm
    async function fetchProduct() {
      try {
        const data = await fetchFromAPI('get-product', { method: 'GET' });
        setProduct({ ...data, quantity: 1 });
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  const changeQuantity = (v) =>
    setProduct((prev) => ({ ...prev, quantity: Math.max(1, prev.quantity + v) }));

  const handleClick = async () => {
    if (!product) return;

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

  // Kiểm tra nếu đang loading
  if (loading) return <p>Loading product...</p>;

  // Kiểm tra nếu không có sản phẩm
  if (!product) return <p>Error: Product not found</p>;

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
