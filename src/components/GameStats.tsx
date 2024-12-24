import React from 'react';
import { useGameStore } from '../store/gameStore';

export const GameStats: React.FC = () => {
  const { pickedNumbers } = useGameStore();
  const lastFiveNumbers = pickedNumbers.slice(-5); // Get the last 5 numbers called

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
      {/* Last 5 Numbers Called */}
      <div className="mt-4">
        <div className="text-sm text-gray-500 mb-2">Last 5 Numbers</div>
        <div className="flex justify-center space-x-2">
          {lastFiveNumbers.length > 0 ? (
            lastFiveNumbers.map((num, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center bg-primary-500 text-white font-semibold rounded-full shadow"
              >
                {num}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-sm">No numbers called yet</div>
          )}
        </div>
      </div>
    </div>
  );
};
