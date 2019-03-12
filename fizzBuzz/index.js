const makeFizzBuzz = (array) => (input) => (
  (array || []).reduce((acc, [ nb, str ]) => !(input % nb) ? acc + str : acc, '') || input
);

const fizzBuzzHissHowlArray = [
  [ 3, 'Fizz' ],
  [ 5, 'Buzz' ],
  [ 7, 'Hiss' ],
  [ 11, 'Howl' ]
];

const fizzBuzzArray = [
  [ 3, 'Fizz' ],
  [ 5, 'Buzz' ],
];

const fizzBuzzHissHowl = makeFizzBuzz(fizzBuzzHissHowlArray);
const fizzBuzz = makeFizzBuzz(fizzBuzzArray);

console.log('[fizzBuzzHissHowl]: ', fizzBuzzHissHowl(1))
console.log('[fizzBuzzHissHowl]: ', fizzBuzzHissHowl(3))
console.log('[fizzBuzzHissHowl]: ', fizzBuzzHissHowl(15))
console.log('[fizzBuzzHissHowl]: ', fizzBuzzHissHowl(165))
console.log('[fizzBuzz]: ', fizzBuzz(3))
console.log('[fizzBuzz]: ', fizzBuzz(5))
console.log('[fizzBuzz]: ', fizzBuzz(15))
console.log('[fizzBuzz]: ', fizzBuzz(165))