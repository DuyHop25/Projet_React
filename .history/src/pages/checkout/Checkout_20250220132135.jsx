import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./pages/cart/Cart";

const stripePromise = loadStripe("your-public-key-here");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        } />
      </Routes>
    </Router>
  );
}

export default App;
