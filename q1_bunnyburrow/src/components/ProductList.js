// src/components/ProductList.js
import React, { useState } from 'react';
import { products } from '../data/products'; // Adjust path if needed
import {
  Wrapper,
  Title,
  Subtitle,
  ProductContainer,
  ProductCard,
  ProductImage,
  SearchInput,
  FilterSelect,
  ProductButton,
  WeightSelect,
  QuantityButton
} from '../styles'; // Ensure paths are correct

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState({}); // To store quantities for each product
  const [weights, setWeights] = useState({}); // To store selected weights for each product

  const handleQuantityChange = (id, newQuantity) => {
    setQuantities(prev => ({ ...prev, [id]: newQuantity }));
  };

  const handleWeightChange = (id, newWeight) => {
    setWeights(prev => ({ ...prev, [id]: newWeight }));
  };

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  return (
    <Wrapper>
      <Title>Welcome to BunnyBurrow Land!!!</Title>
      <Subtitle>Your one stop shop for fresh and yummy produce right from the farm ;)</Subtitle>
      
      {/* Search Input */}
      <SearchInput 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      {/* Filter Select */}
      <FilterSelect 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </FilterSelect>

      {/* Product List */}
      <ProductContainer>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ₹{product.price}</p>

            {/* Weight Dropdown */}
            <WeightSelect 
              value={weights[product.id] || '100g'} 
              onChange={(e) => handleWeightChange(product.id, e.target.value)}
            >
              <option value="100g">100g</option>
              <option value="250g">250g</option>
              <option value="500g">500g</option>
            </WeightSelect>

            {/* Quantity Button */}
            <QuantityButton 
              value={quantities[product.id] || 0} 
              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
            >
              {[0, 1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </QuantityButton>

            {/* Add to Cart Button */}
            <ProductButton onClick={() => addToCart(product.id)}>
              Add to Cart
            </ProductButton>
          </ProductCard>
        ))}
      </ProductContainer>
    </Wrapper>
  );
};

const addToCart = (productId) => {
  // Add to cart logic
  console.log(`Added product ${productId} to cart`);
};

export default ProductList;
