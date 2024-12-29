import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

export const NumberBoard: React.FC = () => {
  const { currentNumber, pickedNumbers, pickNumber } = useGameStore();
  const numbers = Array.from({ length: 90 }, (_, i) => i + 1);

  const handlePickNumber = useCallback(() => {
    pickNumber();
  }, [pickNumber]);

  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <motion.div 
          key={currentNumber}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-28 h-28 sm:w-36 sm:h-36 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 
                   rounded-2xl flex items-center justify-center mb-6 shadow-lg"
        >
          <span className="text-6xl sm:text-7xl font-bold text-white">
            {currentNumber || '-'}
          </span>
        </motion.div>
        
        <button
          onClick={handlePickNumber}
          className="w-full py-3 px-6 bg-primary-500 text-white font-semibold rounded-xl 
                   transition-all duration-200 hover:bg-primary-600 active:transform active:scale-95"
        >
          Pick Number
        </button>
      </div>
      
      <div className="grid grid-cols-10 gap-1.5">
        {numbers.map(num => (
          <div
            key={num}
            className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium
                     ${pickedNumbers.includes(num) 
                       ? 'bg-primary-500 text-white' 
                       : 'bg-gray-50 text-gray-700 border border-gray-200'}`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};