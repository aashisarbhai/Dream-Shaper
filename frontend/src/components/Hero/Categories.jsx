import React from 'react';
import { Link } from 'react-router-dom';
import photo2 from '../photo/photo2.jpg';
import photo3 from '../photo/photo3.jpg';
import photo7 from '../photo/photo7.jpg';
import photo8 from '../photo/photo8.jpg';
import photo9 from '../photo/photo9.jpg';
import photo10 from '../photo/photo10.jpg';
import './Categories.css';

function Categories() {
  const categories = [
    {
      title: "Customised Gifts",
      image: photo7,
      subcategories: ["Custom Portraits", "Personalized Fridge Magnets", "Customized Polaroids", "Handmade Keychains"],
      link: "/pages/CustomizedGifts"
    },
    {
      title: "Functional Art",
      image: photo2,
      subcategories: ["Bookmarks", "Purses", "Resin Art"],
      link: "/pages/FunctionalArt"
    },
    {
      title: "Traditional & Cultural Art",
      image: photo8,
      subcategories: ["Lippan Art", "Traditional Wall Hangings"],
      link: "/pages/Traditional&CulturalArt"
    },
    {
      title: "Miniature & Collectibles",
      image: photo3,
      subcategories: ["Miniature Polaroids", "Small Resin Art Pieces", "Miniature Keychains"],
      link: "/pages/Miniature&Collectibles"
    },
    {
      title: "Fashion & Accessories",
      image: photo9,
      subcategories: ["Fashionable Purses", "Decorative Keychains"],
      link: "/pages/Fashion&Accessories"
    },
    {
      title: "All Products",
      image: photo10,
      subcategories: ["Purses", "Keychains", "Polaroids", "Resin Art Pieces", "Keychains","...."],
      link: "/pages/AllProducts"
    }
  ];

  return (
    <div className="categories-container">
      <h1>Shop by Categories</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="category-item">
            <img src={category.image} alt={category.title} />
            <div className="category-overlay">
              <h2 className="category-title">{category.title}</h2>
              <ul className="subcategory-list">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="subcategory-item">{subcategory}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;