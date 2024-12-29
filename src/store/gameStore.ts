import { create } from 'zustand';
import { generateTicket } from '../utils/ticketGenerator';
import { persist, createJSONStorage } from 'zustand/middleware';
import { announceNumber } from '../utils/speechUtils';

interface GameState {
  pickedNumbers: number[];
  currentNumber: number | null;
  ticket: number[][];
  markedNumbers: number[];
  gameStartTime: number | null;
  pickNumber: () => void;
  markNumber: (number: number) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      pickedNumbers: [],
      currentNumber: null,
      ticket: generateTicket(),
      markedNumbers: [],
      gameStartTime: null,
      
      pickNumber: () => set((state) => {
        const availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1)
          .filter(n => !state.pickedNumbers.includes(n));
        
        if (availableNumbers.length === 0) return state;
        
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const number = availableNumbers[randomIndex];
        
        announceNumber(number);
        
        return {
          currentNumber: number,
          pickedNumbers: [...state.pickedNumbers, number],
          gameStartTime: state.gameStartTime || Date.now()
        };
      }),
      
      markNumber: (number) => set((state) => ({
        markedNumbers: state.markedNumbers.includes(number)
          ? state.markedNumbers.filter(n => n !== number)
          : [...state.markedNumbers, number]
      })),
      
      resetGame: () => set({
        pickedNumbers: [],
        currentNumber: null,
        ticket: generateTicket(),
        markedNumbers: [],
        gameStartTime: null
      })
    }),
    {
      name: 'housie-game-storage',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // If we need to migrate from version 0 to 1
          return {
            ...persistedState,
            gameStartTime: null // Add any new fields with default values
          };
        }
        return persistedState as GameState;
      }
    }
  )
);