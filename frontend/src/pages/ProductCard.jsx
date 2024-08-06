// src/component/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Vendor: {product.vendor}</p>
        <p className="card-text">Delivery: {product.delivery}</p>
      </div>
    </div>
  );
}

export default ProductCard;
