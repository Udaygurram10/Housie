import React from 'react';
import { useGameStore } from '../store/gameStore';

export const GameStats: React.FC = () => {
  const { pickedNumbers } = useGameStore();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Numbers Called</div>
          <div className="text-2xl font-bold text-primary-600">{pickedNumbers.length}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Remaining</div>
          <div className="text-2xl font-bold text-primary-600">{90 - pickedNumbers.length}</div>
        </div>
      </div>
    </div>
  );
};