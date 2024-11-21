export const chaldeanValues: { [key: string]: number } = {
  'a': 1, 'i': 1, 'j': 1, 'q': 1, 'y': 1,
  'b': 2, 'k': 2, 'r': 2,
  'c': 3, 'g': 3, 'l': 3, 's': 3,
  'd': 4, 'm': 4, 't': 4,
  'e': 5, 'h': 5, 'n': 5, 'x': 5,
  'u': 6, 'v': 6, 'w': 6,
  'o': 7, 'z': 7,
  'f': 8, 'p': 8
};

export const calculateDestinyNumber = (name: string): number => {
  const sum = name.toLowerCase().split('')
    .map(char => chaldeanValues[char] || 0)
    .reduce((acc, val) => acc + val, 0);
  
  return reduceToSingleDigit(sum);
};

export const calculateLifePathNumber = (date: string): number => {
  const dateSum = date.split('-')
    .join('')
    .split('')
    .map(Number)
    .reduce((acc, val) => acc + val, 0);
  
  return reduceToSingleDigit(dateSum);
};

const reduceToSingleDigit = (num: number): number => {
  while (num > 9 && num !== 11 && num !== 22) {
    num = String(num).split('').map(Number).reduce((acc, val) => acc + val, 0);
  }
  return num;
};