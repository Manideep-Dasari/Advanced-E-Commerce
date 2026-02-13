import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import "./CheckoutPage.css";

export function CheckoutPage({ cart, loadCart, cartItem }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("/api/delivery-options?expand=estimatedDeliveryTime")
  //     .then((response) => {
  //       setDeliveryOptions(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching delivery options:", error);
  //     });

  //   axios
  //     .get("/api/payment-summary")
  //     .then((response) => {
  //       setPaymentSummary(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching payment summary:", error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    }

    fetchCheckoutData();
  }, []); 

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      let response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    }

    fetchPaymentSummary();
  }, [cart]); // Refetch payment summary whenever cart changes to ensure it reflects the latest totals

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">

          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} cartItem={cartItem}/>

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
