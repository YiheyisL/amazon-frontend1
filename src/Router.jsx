import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Result";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Auth from "./pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51OiakkJjmcFkuZfbjKYnxZ6gBRIMes2mNqh80I3Y99z8CuOMqW5BVflqqaLmJO6k2irdm6kLMWQ6nuLiUYPPqJ5Q00n31J7gFP"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payments"
            element={
              <ProtectedRoute
                msg={"you must log in to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"you must log in to your orders"}
                redirect={"/orders"}
              >
                <Elements stripe={stripePromise}>
                  <Orders />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
