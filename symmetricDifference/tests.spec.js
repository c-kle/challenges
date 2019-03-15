require('mocha');
const assert = require('assert');
const { sym } = require('.');

describe('symmetric diferences', () => {
  it('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
    const res = sym([1, 2, 3], [5, 2, 1, 4]);
    assert.deepEqual(res, [3, 4, 5]);
  })

  it('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements', () => {
    const res = sym([1, 2, 3], [5, 2, 1, 4]);
    assert.equal(res.length, 3);
  })

  it('sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
    const res = sym([1, 2, 3, 3], [5, 2, 1, 4]);
    assert.deepEqual(res, [3, 4, 5]);
  })

  it('sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements', () => {
    const res = sym([1, 2, 3, 3], [5, 2, 1, 4]);
    assert.equal(res.length, 3);
  })

  it('sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5]', () => {
    const res = sym([1, 2, 3], [5, 2, 1, 4, 5]);
    assert.deepEqual(res, [3, 4, 5]);
  })

  it('sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements', () => {
    const res = sym([1, 2, 3], [5, 2, 1, 4, 5]);
    assert.equal(res.length, 3);
  })

  it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', () => {
    const res = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
    assert.deepEqual(res, [1, 4, 5]);
  })

  it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements', () => {
    const res = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
    assert.equal(res.length, 3);
  })

  it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]', () => {
    const res = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
    assert.deepEqual(res, [1, 4, 5]);
  })

  it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements', () => {
    const res = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
    assert.equal(res.length, 3);
  })

  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7]', () => {
    const res = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
    assert.deepEqual(res, [2, 3, 4, 6, 7]);
  })

  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements', () => {
    const res = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
    assert.equal(res.length, 5);
  })

  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]', () => {
    const res = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
    assert.deepEqual(res, [1, 2, 4, 5, 6, 7, 8, 9]);
  })

  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.', () => {
    const res = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
    assert.equal(res.length, 8);
  })

})
