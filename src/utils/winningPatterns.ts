export const checkWinningPatterns = (
  ticket: number[][],
  markedNumbers: number[]
): { earlyFive: boolean; topRow: boolean; middleRow: boolean; bottomRow: boolean; fullHouse: boolean } => {
  const markedCount = markedNumbers.length;
  const rows = ticket.map(row => 
    row.filter(n => n !== 0 && markedNumbers.includes(n)).length
  );
  const numbersPerRow = 5; // Each row has exactly 5 numbers
  
  return {
    earlyFive: markedCount >= 5,
    topRow: rows[0] === numbersPerRow,
    middleRow: rows[1] === numbersPerRow,
    bottomRow: rows[2] === numbersPerRow,
    fullHouse: rows.reduce((a, b) => a + b) === numbersPerRow * 3
  };
};