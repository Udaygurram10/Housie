export const generateTicket = (): number[][] => {
  const ticket: number[][] = Array(3).fill(null).map(() => Array(9).fill(0));
  const numbersPerRow = 5;
  
  // Ensure each row gets exactly 5 numbers
  for (let row = 0; row < 3; row++) {
    let numbersPlaced = 0;
    
    while (numbersPlaced < numbersPerRow) {
      const col = Math.floor(Math.random() * 9);
      
      // Skip if this column already has a number in this row
      if (ticket[row][col] !== 0) continue;
      
      const min = col * 10 + 1;
      const max = col === 8 ? 90 : (col + 1) * 10;
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      
      // Check if this number is already used in the ticket
      const isNumberUsed = ticket.some(r => r.includes(number));
      if (!isNumberUsed) {
        ticket[row][col] = number;
        numbersPlaced++;
      }
    }
  }
  
  return ticket;
};