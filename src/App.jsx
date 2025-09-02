import React, { useState, useEffect } from 'react';
// This line has been fixed to include AnimatePresence
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const controls = useAnimation(); // Animation controls for the header cart icon

  const handleAddToCart = (product) => {
    // Jiggle animation on the cart icon
    controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    });

    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <motion.div animate={controls}>
        <Header 
          cartItemCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
        />
      </motion.div>
      
      <main>
        <ProductList onAddToCart={handleAddToCart} />
      </main>

      {/* This is the part that was causing the error before the fix */}
      <AnimatePresence>
        {isCartOpen && <Cart cartItems={cartItems} onClose={() => setIsCartOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;