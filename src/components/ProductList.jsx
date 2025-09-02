import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { products } from '../data/products';

// Animation variants for the container to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This will make each child animate one after the other
    },
  },
};

const ProductList = ({ onAddToCart }) => {
  return (
    <motion.div
      className="product-list"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </motion.div>
  );
};

export default ProductList;