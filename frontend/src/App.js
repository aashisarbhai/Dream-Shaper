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


import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />
        
        <Login/>
        <Signup/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item" element={<ShopCategory category="Item" />} />
          <Route path="/notification" element={<ShopCategory category="Notification" />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
        <ProfileSection />
        <ProductSection/>
      </BrowserRouter>
    </div>
  );
}

export default App;
