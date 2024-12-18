import React from 'react';
import { motion } from 'framer-motion';
import { NumberBoard } from '../components/NumberBoard';
import { NewGameButton } from '../components/NewGameButton';
import { GameStats } from '../components/GameStats';
import { useGameStore } from '../store/gameStore';

export const HostPage: React.FC = () => {
  const resetGame = useGameStore(state => state.resetGame);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto max-w-3xl px-4 py-6"
    >
      <div className="mb-4">
        <NewGameButton onClick={resetGame} />
      </div>
      <GameStats />
      <NumberBoard />
    </motion.div>
  );
};