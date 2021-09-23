//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (receivedWord ) => {
  const word = receivedWord.toLowerCase();
  return alphabet.every(letter => word.includes(letter))
};
