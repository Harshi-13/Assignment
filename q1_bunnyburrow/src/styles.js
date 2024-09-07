import styled, { createGlobalStyle } from 'styled-components';

// Global styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: beige; /* Background color for the whole app */
  }
`;

// Layout wrapper for main content
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0; /* Ensure no margin is applied to the body */
  box-sizing: border-box;
`;

// Heading styles
export const Title = styled.h1`
  color: lightpink;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled.h2`
  color: purple;
  text-align: center;
  margin: 10px 0 20px;
`;

// Search and Filter styles
export const SearchInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

export const FilterSelect = styled.select`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Product listing styles
export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  padding: 0; /* Ensure no padding is applied to the container */
  box-sizing: border-box;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  text-align: center;
  background-color: #fff;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px; /* Limit the height to ensure consistency */
  object-fit: cover; /* Ensure the image covers the area */
  display: block; /* Remove any extra space below the image */
`;

// Additional styles
export const ProductButton = styled.button`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50; /* Green */
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049; /* Darker green */
  }
`;

export const WeightSelect = styled.select`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100px; /* Adjust width as needed */
`;

export const QuantityButton = styled.select`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80px; /* Adjust width as needed */
`;

// Cart Page Styles
export const CartButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50; /* Green */
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049; /* Darker green */
  }
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const CartTableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  text-align: left;
`;

export const CartTableRow = styled.tr``;

export const CartTableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

// Navbar styles
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: beige; /* Changed to beige */
  color: black; /* Ensure text color is readable */
`;

export const CartButtonNavbar = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;
