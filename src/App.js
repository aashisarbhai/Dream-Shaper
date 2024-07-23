
import './App.css';
import Navbar from './Context/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Home from './pages/Home';
import Item from './pages/Item';
import Notification from './pages/Notification';
import About from './pages/About';
import Product from './components/Product'; 
import Cart from './components/Cart';        
import LoginSignup from './components/LoginSignup'; 

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={Home}/>
      <Route path='/Item'element={<ShopCategory category="Item"/>}/>
      <Route path='/Notification'element={<ShopCategory category="Notification"/>}/>
      <Route path='/About'element={<ShopCategory category="About"/>}/>
      <Route path="product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
