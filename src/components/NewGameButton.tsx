import React from 'react';
import { motion } from 'framer-motion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

interface NewGameButtonProps {
  onClick: () => void;
}

export const NewGameButton: React.FC<NewGameButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center justify-center gap-2 w-full py-3 px-6 
                 bg-gradient-to-r from-primary-500 to-secondary-500 
                 text-white font-semibold rounded-xl shadow-md 
                 transition-all duration-200 hover:shadow-lg"
    >
      <ArrowPathIcon className="w-5 h-5" />
      New Game
    </motion.button>
  );
};