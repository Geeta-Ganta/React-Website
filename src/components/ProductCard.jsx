import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      className="product-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.img 
        src={product.image} 
        alt={product.name}
        layoutId={`product-img-${product.id}`} // For potential future animations
      />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <motion.button
        onClick={() => onAddToCart(product)}
        whileHover={{ scale: 1.1, backgroundColor: '#3ca877' }}
        whileTap={{ scale: 0.9 }}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;