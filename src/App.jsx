import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cart from './components/Cart';
import { Menu, ShoppingCart, User, Star } from 'lucide-react';

function App() {
  const [cart, setCart] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleCartOpen = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  return (
    <div className="">
      <Navbar onCartOpen={handleCartOpen} />
      {showCart ? (
        <Cart cartItems={cart} onClose={handleCartClose} />
      ) : (
        <Hero addToCart={addToCart} />
      )}
    </div>
  );
} export default App;
