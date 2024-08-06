import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';

function Keychains() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3389/products/Keychains');
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Keychains</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="d-flex flex-wrap">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}


export default Keychains
