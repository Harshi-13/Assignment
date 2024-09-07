// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CartButton,
  CartTable,
  CartTableHeader,
  CartTableRow,
  CartTableCell
} from '../styles';

const CartPage = ({ cartItems }) => {
  console.log('Cart Items:', cartItems); // Debugging line

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <CartButton>
        <Link to="/">Home</Link>
      </CartButton>
      <h1>Cart Page</h1>
      <CartTable>
        <thead>
          <CartTableRow>
            <CartTableHeader>Product</CartTableHeader>
            <CartTableHeader>Unit Price</CartTableHeader>
            <CartTableHeader>Quantity</CartTableHeader>
            <CartTableHeader>Total Price</CartTableHeader>
          </CartTableRow>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <CartTableRow key={item.id}>
              <CartTableCell>{item.title}</CartTableCell>
              <CartTableCell>{item.price} INR</CartTableCell>
              <CartTableCell>{item.quantity}</CartTableCell>
              <CartTableCell>{item.price * item.quantity} INR</CartTableCell>
            </CartTableRow>
          ))}
        </tbody>
      </CartTable>
      <h2>Total Price: {totalPrice} INR</h2>
    </>
  );
};

export default CartPage;
