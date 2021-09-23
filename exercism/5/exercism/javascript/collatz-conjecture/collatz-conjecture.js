//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number <= 0 ) {
    throw new Error('Only positive numbers are allowed')
  }

  let i = 0;
  while (number !== 1) {
    number % 2 === 0 ? number /= 2 : number = number * 3 + 1;
    i++;
  }
  return i;
};
