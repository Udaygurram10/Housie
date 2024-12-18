import { Observable } from '@nativescript/core';
import { GameModel } from '../models/game.model';

export class HostViewModel extends Observable {
  private game: GameModel;
  private _numbers: number[];

  constructor() {
    super();
    this.game = new GameModel();
    this._numbers = Array.from({ length: 90 }, (_, i) => i + 1);
    this.notifyPropertyChange('numbers', this._numbers);
  }

  get numbers(): number[] {
    return this._numbers;
  }

  get currentNumber(): number {
    return this.game.currentNumber;
  }

  pickNumber() {
    const number = this.game.pickNumber();
    if (number) {
      this.notifyPropertyChange('currentNumber', number);
      this.notifyPropertyChange('numbers', this._numbers);
    }
  }

  numberStateClass(num: number): string {
    return this.game.pickedNumbers.includes(num) 
      ? 'bg-green-500 text-white' 
      : 'bg-gray-200';
  }
}