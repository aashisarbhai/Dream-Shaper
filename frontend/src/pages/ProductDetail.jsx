
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log('Product ID from URL params:', id); // Log the id to verify it's correct

    const fetchProduct = async () => {
      try {
        const url = `http://localhost:3389/product/${id}`;
        console.log('Fetching product from URL:', url); // Log the URL being called
        const response = await axios.get(url);
        console.log('Product fetched successfully:', response.data); // Log the response
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching the product:', error); // Log the error
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Unable to load product</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetail;
