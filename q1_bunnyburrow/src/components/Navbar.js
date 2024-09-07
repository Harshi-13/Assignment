import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, CartButton } from '../styles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <CartButton>Cart</CartButton>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
