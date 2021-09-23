//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dnaA, dnaB) => {
  if (dnaA.length === 0 && dnaB.length > 0) {
    throw new Error('left strand must not be empty')
  }

  if (dnaB.length === 0 && dnaA.length > 0) {
    throw new Error('right strand must not be empty')
  }

  if (dnaB?.length !== dnaA?.length) {
    throw new Error('left and right strands must be of equal length')
  }

  let dna = 0;
  for (let i = 0; i < dnaA.length; i++) {
    dna += (dnaA.charAt(i) !== dnaB.charAt(i));
  }
  return dna;
};
