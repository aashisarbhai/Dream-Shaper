import './App.css';
import Navbar from './Context/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Cart from './components/Cart';
// import LoginSignup from './pages/LoginSignup';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Footer from './Context/Footer/Footer';
import ProfileSection from './Context/Navbar/ProfileSection';
import ProductSection from './Context/Navbar/ProductSection';
import Polaroids from './pages/Polaroids';
import Portraits from './pages/Portraits';
import ResinArt from './pages/ResinArt';
import Bookmark from './pages/Bookmark';
import Keychains from './pages/Keychains';
import LippanArt from './pages/LippanArt';
import Necklace from './pages/Necklace';
import Paintings from './pages/Paintings';
import Purse from './pages/Purse';
import WallHanging from './pages/WallHanging';

import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item" element={<ShopCategory category="Item" />} />
          <Route path="/notification" element={<ShopCategory category="Notification" />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/pages/polaroids" element={<Polaroids />} />
          <Route path="/pages/portraits" element={<Portraits />} />
          <Route path="/pages/ResinArt" element={<ResinArt />} />
          <Route path="/pages/Bookmark" element={<Bookmark />} />
          <Route path="/pages/Keychains" element={<Keychains />} />
          <Route path="/pages/LippanArt" element={<LippanArt />} />
          <Route path="/pages/Necklace" element={<Necklace />} />
          <Route path="/pages/Paintings" element={<Paintings />} />
          <Route path="/pages/Purse" element={<Purse />} />
          <Route path="/pages/WallHanging" element={<WallHanging />} />
        </Routes>
        <Footer />
        <ProfileSection />
        <ProductSection/>
      </BrowserRouter>
    </div>
  );
}

export default App;
