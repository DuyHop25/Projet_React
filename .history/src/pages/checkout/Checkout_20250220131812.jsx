import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useStripe} from ".parse-json-sNIYvDcA"
import { Link } from 'react-router-dom';



export default function Checkout() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.shopping);
    const stripe = useStripe();

    let totalCost = 0;
    let totalRate = 0;

    cartItems.forEach((item) => {
        totalCost += item.price * item.qty;
        totalRate += (item.price * item.qty * item.rate) / 100;
    });

    const handleCheckout = async () => {
        const session = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: cartItems })
        }).then(res => res.json());

        if (session.error) {
            console.error('Checkout error:', session.error);
            return;
        }

        stripe.redirectToCheckout({ sessionId: session.id });
    };

    return (
        <div className="checkout_container">
            <h2>Checkout</h2>
            <div className="checkout_items">
                {cartItems.map((item) => (
                    <div key={item._id} className="checkout_item">
                        <img src={item.img} alt={item.name} className="checkout_img" />
                        <div className="checkout_details">
                            <p>{item.name}</p>
                            <p>£{item.price} x {item.qty}</p>
                            <p>Total: £{item.price * item.qty}</p>
                            <button onClick={() => dispatch(removeItem(item._id))}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout_summary">
                <p>Subtotal: £{totalCost}</p>
                <p>Shipping: £{totalRate}</p>
                <p><strong>Grand Total: £{totalCost + totalRate}</strong></p>
                <button onClick={handleCheckout}>Proceed to Payment</button>
                <Link to="/cart">Back to Cart</Link>
            </div>
        </div>
    );
}