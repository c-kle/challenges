const when = (predicate, onTrue) => value => predicate(value) ? onTrue(value) : value;
const pipe = (...fns) => (arg) => fns.reduce((acc, curr) => curr(acc), arg);
const getCharCode = input => input.charCodeAt(0);
const fromCharCode = input => String.fromCharCode(input);

const A_CHAR_CODE = getCharCode('A');
const Z_CHAR_CODE = getCharCode('Z');

const isLetter = charCode => charCode >= A_CHAR_CODE && charCode <= Z_CHAR_CODE;

const rotCharCode13 = code => when(
  rotatedCode => rotatedCode > Z_CHAR_CODE,
  rotatedCode => A_CHAR_CODE + (rotatedCode % Z_CHAR_CODE) - 1
)(code + 13)

const rotIfIsLetter = pipe(
  getCharCode,
  when(isLetter, rotCharCode13),
  fromCharCode
);

const rot13 = pipe(
  input => input.toUpperCase(),
  input => input.split(''),
  array => array.map(rotIfIsLetter),
  input => input.join('')
);

rot13("SERR PBQR PNZC");
module.exports = { rot13 }
