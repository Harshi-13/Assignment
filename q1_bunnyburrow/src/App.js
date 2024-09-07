import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';

const App = () => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add or update items in the cart
  const addToCart = (product, quantity, weight) => {
    setCartItems((prevItems) => {
      // Check if the item with the same product ID and weight exists in the cart
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.weight === weight
      );

      if (existingItem) {
        // If exists, update the quantity
        return prevItems.map((item) =>
          item.product.id === product.id && item.weight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If not exists, add a new item
        return [...prevItems, { product, quantity, weight }];
      }
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Pass the addToCart function to ProductList */}
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        {/* Pass cartItems to CartPage */}
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
