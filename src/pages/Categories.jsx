import React from 'react';
import { Link } from 'react-router-dom';
import polaroid from '../components/photo/polaroid.jpg';

function Categories() {
  return (
    <div>
     
      <h1>Shop by Categories</h1>
      <ul>
      <img src={polaroid} alt='../Components/photo/polaroid'/>
        <li>Personalized & Gifts
          <ul>
            <li>Custom Portraits</li>
            <li>Personalized Fridge Magnets</li>
            <li>Customized Polaroids</li>
            <li>Handmade Keychains</li>
          </ul>
        </li>
        <li>Functional Art
          <ul>
            <li>Bookmarks</li>
            <li>Purses</li>
            <li>Resin Art (functional pieces like coasters, trays, etc.)</li>
          </ul>
        </li>
        <li>Traditional & Cultural Art
          <ul>
            <li>Lippan Art</li>
            <li>Traditional Wall Hangings</li>
          </ul>
        </li>
        <li>Miniature & Collectibles
          <ul>
            <li>Miniature Polaroids</li>
            <li>Small Resin Art Pieces</li>
            <li>Miniature Keychains</li>
          </ul>
        </li>
        <li>Fashion & Accessories
          <ul>
            <li>Fashionable Purses</li>
            <li>Decorative Keychains</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
