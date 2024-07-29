import './App.css';
import Navbar from './Context/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Home from './pages/Home';
import WishList from './components/WishList'; 
import Cart from './components/Cart';        
import LoginSignup from './components/LoginSignup'; 
import Hero from './components/Hero/Hero';
import About from './pages/About';
import Footer from './Context/Footer/Footer';
import './index.css';

function App() {
  return (
    <div>
      {/* ygtybttbygvt */}
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={Home}/>
      <Route path='/About'element={<About/>}/>
      <Route path='/Item'element={<ShopCategory category="Item"/>}/>
      <Route path='/Notification'element={<ShopCategory category="Notification"/>}/>
      <Route path='/About'element={<ShopCategory category="About"/>}/>
      <Route path="/WishList" element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     
     <Hero/>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
