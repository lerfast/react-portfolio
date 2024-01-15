import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const popupVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const Popup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl p-6"
            onClick={(e) => e.stopPropagation()} // Previene que el popup se cierre cuando se hace clic dentro de él
          >
            {/* Contenido del popup */}
            <h2 className="text-2xl font-bold mb-4">Meet the designer</h2>
            <p>Hey, I'm José, a UX designer with a passion for creating meaningful experiences.</p>
            <button
              className="mt-4 bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
);
};

export default Popup;
