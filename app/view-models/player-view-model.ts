import { Observable } from '@nativescript/core';
import { GameModel } from '../models/game.model';

export class PlayerViewModel extends Observable {
  private game: GameModel;
  private _ticket: number[][];
  private _markedNumbers: Set<number>;

  constructor() {
    super();
    this.game = new GameModel();
    this._ticket = this.game.generateTicket();
    this._markedNumbers = new Set();
    this.notifyPropertyChange('ticket', this._ticket);
  }

  get ticket(): number[][] {
    return this._ticket;
  }

  onNumberTap(args: any) {
    const number = args.object.text;
    if (!number) return;

    const num = parseInt(number);
    if (this._markedNumbers.has(num)) {
      this._markedNumbers.delete(num);
    } else {
      this._markedNumbers.add(num);
    }
    
    this.notifyPropertyChange('ticket', this._ticket);
  }

  numberClass(num: number): string {
    if (!num) return 'text-transparent';
    return this._markedNumbers.has(num) 
      ? 'bg-green-500 text-white' 
      : '';
  }
}