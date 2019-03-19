require('mocha');
const assert = require('assert');
const { rot13 } = require('.');

describe('rot13', () => {
  it('rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP', () => {
    const res = rot13("SERR PBQR PNZC");
    assert.equal(res, 'FREE CODE CAMP');
  })
  it('rot13("SERR CVMMN!") should decode to FREE PIZZA!', () => {
    const res = rot13("SERR CVMMN!");
    assert.equal(res, 'FREE PIZZA!');
  })
  it('rot13("SERR YBIR?") should decode to FREE LOVE?', () => {
    const res = rot13("SERR YBIR?");
    assert.equal(res, 'FREE LOVE?');
  })
  it('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
    const res = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
    assert.equal(res, 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  })
});
