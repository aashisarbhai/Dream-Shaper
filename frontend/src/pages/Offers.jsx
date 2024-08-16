import React from 'react';
import './Offers.css';

const offers = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 50% off on selected items.",
    image: "summer-sale.jpg",
    link: "/summer-sale"
  },
  {
    id: 2,
    title: "Buy One Get One Free",
    description: "On all accessories. Limited time only!",
    image: "bogo.jpg",
    link: "/bogo"
  },
  {
    id: 3,
    title: "Exclusive Deals",
    description: "Sign up now to get exclusive deals and offers.",
    image: "exclusive-deals.jpg",
    link: "/exclusive-deals"
  }
];

const Offers = () => {
  return (
    <div className="offers-container">
      <h1>Special Offers</h1>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h2 className="offer-title">{offer.title}</h2>
            <p className="offer-description">{offer.description}</p>
            <a href={offer.link} className="offer-link">Shop Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
