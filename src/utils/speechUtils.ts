import { formatNumberWords } from './numberFormatter';

export const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9; // Slightly slower for clarity
  utterance.pitch = 1;
  utterance.volume = 1;
  speechSynthesis.speak(utterance);
};

export const announceNumber = (number: number) => {
  const numberWords = formatNumberWords(number);
  speak(`Number ${numberWords}`);
};