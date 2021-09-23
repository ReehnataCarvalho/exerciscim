//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  const firstColor = COLORS.indexOf(colors[0]);
  const secondColor = COLORS.indexOf(colors[1]);

  return parseInt(`${firstColor}${secondColor}`)
};

export const COLORS =  ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']