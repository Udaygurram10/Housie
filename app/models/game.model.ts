import { Observable } from '@nativescript/core';

export class GameModel extends Observable {
  private _pickedNumbers: number[] = [];
  private _currentNumber: number = 0;

  get pickedNumbers(): number[] {
    return this._pickedNumbers;
  }

  get currentNumber(): number {
    return this._currentNumber;
  }

  pickNumber(): number | null {
    const availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1)
      .filter(n => !this._pickedNumbers.includes(n));
    
    if (availableNumbers.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const number = availableNumbers[randomIndex];
    
    this._currentNumber = number;
    this._pickedNumbers.push(number);
    
    this.notifyPropertyChange('currentNumber', number);
    this.notifyPropertyChange('pickedNumbers', this._pickedNumbers);
    
    return number;
  }

  generateTicket(): number[][] {
    const ticket: number[][] = Array(3).fill(null).map(() => Array(9).fill(0));
    const numbersPerRow = 5;
    
    // Generate numbers for each column
    for (let col = 0; col < 9; col++) {
      const min = col * 10 + 1;
      const max = col === 8 ? 90 : (col + 1) * 10;
      const numbers = Array.from({ length: max - min + 1 }, (_, i) => min + i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
      
      // Distribute numbers randomly across rows
      numbers.forEach((num, index) => {
        let row;
        do {
          row = Math.floor(Math.random() * 3);
        } while (ticket[row].filter(n => n !== 0).length >= numbersPerRow);
        
        ticket[row][col] = num;
      });
    }
    
    return ticket;
  }
}