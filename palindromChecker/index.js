const pipe = (...fns) => (arg) => fns.reduce((acc, curr) => curr(acc), arg);

const removeNonAlphanum = (input) => input.replace(/[^a-zA-Z0-9]/g, '');
const toLower = (input) => input.toLowerCase();
const isPalindrome = (input) => {
  const array = input.split('');

  for(let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const palindrome = pipe(
  removeNonAlphanum,
  toLower,
  isPalindrome
);

module.exports = { palindrome };
