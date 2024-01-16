// Importing the styles for the App component
import './App.css';
// Importing the OrdersPage component from the specified file path.
import OrdersPage from './Components/OrdersPage';

function App() {
  // Rendering the OrdersPage component within the App component.
  return (
    <OrdersPage></OrdersPage>
  );
}
// Exporting the App component as the default export of this module.
export default App;
