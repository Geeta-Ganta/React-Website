import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="header">
      <h1 className="logo">Retro Emporium</h1>
      <motion.div
        className="cart-icon"
        onClick={onCartClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiShoppingCart size="24px" />
        <AnimatePresence>
          {cartItemCount > 0 && (
            <motion.span
              className="cart-count"
              initial={{ scale: 0, y: -10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              key={cartItemCount} // Key is crucial for re-animation
            >
              {cartItemCount}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;