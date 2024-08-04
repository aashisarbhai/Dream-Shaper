import './App.css';
import Navbar from './Context/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Cart from './components/Cart';
import LoginSignup from './pages/LoginSignup';
import About from './pages/About';
import Footer from './Context/Footer/Footer';
import ProfileSection from './Context/Navbar/ProfileSection';
import ProductSection from './Context/Navbar/ProductSection';
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
          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
        <Footer />
        <ProfileSection />
        <ProductSection/>
      </BrowserRouter>
    </div>
  );
}

export default App;
