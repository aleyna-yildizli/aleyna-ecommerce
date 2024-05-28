import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state ? location.state.orderDetails : null;

  console.log("Order Details in OrderConfirmation:", orderDetails); // Verilerin doğru gelip gelmediğini kontrol etmek için log ekleyin

  if (!orderDetails) {
    return <div>Order details not found.</div>;
  }

  const { id, order_date, price, products, address } = orderDetails;

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Your order has been successfully placed. Here are the details:</p>
      <h2>Order Details</h2>
      <p>Order ID: {id}</p>
      <p>Order Date: {new Date(order_date).toLocaleString()}</p>
      <p>Total Price: {price}₺</p>
      <h3>Address</h3>
      <p>
        {address
          ? `${address.address}, ${address.city}, ${address.district}`
          : "Address not found"}
      </p>
      <h3>Products</h3>
      {products.map((product, index) => (
        <div key={index} className="product-details">
          <img src={product.image} alt={product.name} width="50" height="50" />
          <p>{product.name}</p>
          <p>Quantity: {product.count}</p>
          <p>Product ID: {product.product_id}</p>
          <p>Detail: {product.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderConfirmation;
