import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const cartVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { x: '100%', transition: { duration: 0.3 } },
};

const Cart = ({ cartItems, onClose }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      <motion.div
        className="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      />
      <motion.div
        className="cart-sidebar"
        variants={cartVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={onClose} className="close-btn"><FiX size={24} /></button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              <AnimatePresence>
                {cartItems.map(item => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            <div className="cart-total">
              <h3>Total:</h3>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;