require('mocha');
const assert = require('assert');
const { palindrome } = require('.');

describe('palindrome', () => {
  it('palindrome("eye") should return a boolean.', () => {
    const res = palindrome("eye");
    assert.equal(typeof res === "boolean", true);
  })
  it('palindrome("eye") should return true.', () => {
    const res = palindrome("eye");
    assert.equal(res, true);
  })
  it('palindrome("_eye") should return true.', () => {
    const res = palindrome("_eye");
    assert.equal(res, true);
  })
  it('palindrome("race car") should return true.', () => {
    const res = palindrome("race car");
    assert.equal(res, true);
  })
  it('palindrome("not a palindrome") should return false.', () => {
    const res = palindrome("not a palindrome");
    assert.equal(res, false);
  })
  it('palindrome("A man, a plan, a canal. Panama") should return true.', () => {
    const res = palindrome("A man, a plan, a canal. Panama");
    assert.equal(res, true);
  })
  it('palindrome("never odd or even") should return true.', () => {
    const res = palindrome("never odd or even");
    assert.equal(res, true);
  })
  it('palindrome("nope") should return false.', () => {
    const res = palindrome("nope");
    assert.equal(res, false);
  })
  it('palindrome("almostomla") should return false.', () => {
    const res = palindrome("almostomla");
    assert.equal(res, false);
  })
  it('palindrome("My age is 0, 0 si ega ym.") should return true.', () => {
    const res = palindrome("My age is 0, 0 si ega ym.");
    assert.equal(res, true);
  })
  it('palindrome("1 eye for of 1 eye.") should return false.', () => {
    const res = palindrome("1 eye for of 1 eye.");
    assert.equal(res, false);
  })
  it('palindrome("0_0 (: /-\ :) 0-0") should return true.', () => {
    const res = palindrome("0_0 (: /-\ :) 0-0");
    assert.equal(res, true);
  })
  it('palindrome("five|\_/|four") should return false.', () => {
    const res = palindrome("five|\_/|four");
    assert.equal(res, false);
  })
});
