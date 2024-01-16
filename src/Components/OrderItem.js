import React from 'react';
// Functional component for rendering details of a single order item.
const OrderItem = ({ order }) => {
   // Rendering the details of the order item within an HTML list item (<li>).
  return (
    <li key={order._id}>
      <div>
        <strong>Order ID:</strong> {order._id}
      </div>
      <div>
        <strong>User ID:</strong> {order.user}
      </div>
      <div>
        <strong>Total:</strong> ${order.total}
      </div>
      <div>
        <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleString()}
      </div>
      <div>
        <strong>Items:</strong>
        <ul>
          {order.items.map((item) => (
            <li key={item._id}>
              Product: {item.product}, <br/>Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Status:</strong>{order.state}
      </div>
      <hr />
    </li>
  );
};
// Exporting the OrderItem component as the default export of this module.
export default OrderItem;