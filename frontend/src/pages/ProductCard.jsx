// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const productId = product.id;
//   return (
//     <div className="product-card">
//       <Link to={`/product/${productId}`} className="card-link">
//         <img src={product.image} className="card-img-top" alt={product.name} />
//       </Link>
//       <div>
//         <Link to={`/product/${productId}`} className="card-link">
//           <h5 className="card-title">{product.name}</h5>
//         </Link>
//       </div>
//       <div className="card-body">
//         <p className="card-text">Price: ${product.price}</p>
//         <p className="card-text">Vendor: {product.vendor}</p>
//         <p className="card-text">Delivery: {product.delivery}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   const handleBuyNow = () => {
//     navigate(`/product/${product.id}`);
//   };

//   return (
//     <div className="product-card">
//       <img src={product.image} className="card-img-top" alt={product.name} />
//       <div>
//         <h5 className="card-title">{product.name}</h5>
//       </div>
//       <div className="card-body">
//         <p className="card-text">Price: ${product.price}</p>
//         <p className="card-text">Vendor: {product.vendor}</p>
//         <p className="card-text">Delivery: {product.delivery}</p>
//         <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const a = product._id
  
  const handleBuyNow = () => {
    navigate(`/product/${a}`);
    
  };

  return (
    <div className="product-card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div>
        <h5 className="card-title">{product.name}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Vendor: {product.vendor}</p>
        <p className="card-text">Delivery: {product.delivery}</p>
        <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;

