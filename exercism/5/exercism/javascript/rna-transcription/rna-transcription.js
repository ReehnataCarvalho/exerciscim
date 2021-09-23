//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export const toRna = (DNA = '') => {
  const sentDNA = DNA.split('');

  if (sentDNA.length === 1) {
    return RNA[DNA];
  }
  return DnaMaiorQueUm(sentDNA);
};

const DnaMaiorQueUm = (DNA) => {
  const newRna = DNA.map((d) => {
    return RNA[d];
  })

  return newRna.join('')
}