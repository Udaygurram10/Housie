import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { checkWinningPatterns } from '../utils/winningPatterns';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export const Ticket: React.FC = () => {
  const { ticket, markedNumbers, markNumber } = useGameStore();
  const winningPatterns = checkWinningPatterns(ticket, markedNumbers);

  return (
    <div className="p-4">
      <div className="ticket-container">
        {/* Ticket Header */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 text-white">
          <h2 className="text-xl font-bold text-center">Housie Ticket</h2>
          <div className="text-xs text-center opacity-75 mt-1">
            Serial No: {Math.random().toString(36).substr(2, 8).toUpperCase()}
          </div>
        </div>

        {/* Ticket Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ticket-body p-2"
        >
          <div className="grid grid-cols-9 gap-[1px] border border-gray-200 rounded-lg overflow-hidden bg-gray-200">
            {ticket.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((num, colIndex) => (
                  <motion.div
                    key={`${rowIndex}-${colIndex}`}
                    whileHover={num ? { scale: 1.05 } : {}}
                    whileTap={num ? { scale: 0.95 } : {}}
                    onClick={() => num && markNumber(num)}
                    className={`
                      relative aspect-square flex items-center justify-center bg-white
                      cursor-pointer transition-all duration-200 text-sm
                      ${
                        num
                          ? `hover:bg-gray-50 ${
                              markedNumbers.includes(num)
                                ? 'marked-number glow-effect'
                                : ''
                            }`
                          : 'bg-gray-50/50'
                      }
                    `}
                  >
                    {num ? (
                      <span
                        className={`
                          font-medium 
                          ${
                            markedNumbers.includes(num)
                              ? 'text-primary-600 font-bold'
                              : 'text-gray-700'
                          }
                        `}
                      >
                        {num}
                      </span>
                    ) : (
                      <span className="text-transparent text-xs">0</span>
                    )}
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Winning Patterns */}
        <div className="border-t border-gray-100 p-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.entries(winningPatterns).map(([pattern, achieved]) => (
              <div
                key={pattern}
                className={`
                  flex items-center justify-between p-2 rounded-md
                  ${
                    achieved
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-500'
                  }
                `}
              >
                <span className="capitalize font-medium">
                  {pattern.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                {achieved ? (
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircleIcon className="w-4 h-4 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
