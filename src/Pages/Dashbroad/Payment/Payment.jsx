import React, { useState } from "react";
import SectionTitlee from "../../../Component/SectionTitlee";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChceekOutFrom from "./ChceekOutFrom";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const Payment = () => {
  const [cart, refetch] = useCart() || [[]];
  const { user } = useAuth();
  const totalPrice = cart?.reduce((total, item) => {
    return total + (item.price || 0); // Fallback to 0 if item.price is undefined or null
  }, 0);
  
  const secureAxios = useAxiosSecure();
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCreatePayment = async (e) => {
    e.preventDefault(); // Prevent form refresh

    try {
      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: "",
        date: new Date(),
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuItemid),
        status: "pending",
      };

      const response = await secureAxios.post("/creat-ssl-payment", payment);
      if(response.data?.gatewayUrl){
        window.location.replace(response.data.gatewayUrl)
      }
      console.log("Response:", response.data);

     
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };
  console.log("Cart Data:", cart);
  console.log("Total Price:", totalPrice);
  
  return (
    <div className="flex flex-col items-center w-full">
      <SectionTitlee heading="Payment" subHeading="---Please Pay First---" />

      {/* Payment method selection */}
      <select
        value={paymentMethod}
        onChange={handlePaymentMethodChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="stripe">Stripe</option>
        <option value="ssl">SSLCommerz</option>
      </select>

      {/* Conditionally render content based on selected payment method */}
      {paymentMethod === "stripe" ? (
        <div className="w-full">
          <Elements stripe={stripePromise}>
            <ChceekOutFrom />
          </Elements>
        </div>
      ) : (
        <div className="w-full text-center">
          <p>Payment details</p>
          <p>Please fill out the form below to complete your payment via SSLCommerz.</p>

          <form className="mt-4" onSubmit={handleCreatePayment}>
            <input
              type="email"
              value={user.email}
              placeholder="Enter your email"
              className="mb-2 p-2 border border-gray-300 rounded w-full"
              required
              readOnly
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded w-full"
            >
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Payment;
