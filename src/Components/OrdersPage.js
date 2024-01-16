// Importing React, useEffect, and useState from the 'react' library.
import React, { useEffect, useState } from 'react';
// Importing the axios library for making HTTP requests.4
import axios from 'axios';
// Importing the OrderItem component for displaying individual order details.
import OrderItem from './OrderItem';

// Functional component for rendering a page that displays a list of orders.
const OrdersPage = () => {
  // State variable to store the list of orders, initialized as an empty array.
    const [orders, setOrders] = useState([]);
// useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    // Define an asynchronous function to fetch orders data from the server.
    const fetchData = async () => {
        try {
          // Making a GET request to the specified endpoint and storing the response in the 'response' variable.
            const response = await axios.get('http://localhost:3000/orders');
            // Updating the 'orders' state with the data received from the server.
            setOrders(response.data);
            } catch (error) {
              // Handling errors by logging an error message to the console.
                console.error('Error fetching data:', error.message);
            }
        };
// Calling the fetchData function to initiate the data fetching process.
        fetchData();
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts.

// Rendering the component's UI.
  return (
    <div>
      <h1>Orders Page</h1>
      <ul>
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </ul>
    </div>
  );
}
// Exporting the OrdersPage component as the default export of this module.
export default OrdersPage;