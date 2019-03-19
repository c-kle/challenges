require('mocha');
const assert = require('assert');
const { convertToRoman } = require('.');

describe('convertToRoman', () => {
  it('convertToRoman(2) should return "II".', () => {
    const res = convertToRoman(2);
    assert.equal(res, 'II');
  })
  it('convertToRoman(3) should return "III".', () => {
    const res = convertToRoman(3);
    assert.equal(res, 'III');
  })
  it('convertToRoman(4) should return "IV".', () => {
    const res = convertToRoman(4);
    assert.equal(res, 'IV');
  })
  it('convertToRoman(5) should return "V".', () => {
    const res = convertToRoman(5);
    assert.equal(res, 'V');
  })
  it('convertToRoman(9) should return "IX".', () => {
    const res = convertToRoman(9);
    assert.equal(res, 'IX');
  })
  it('convertToRoman(12) should return "XII".', () => {
    const res = convertToRoman(12);
    assert.equal(res, 'XII');
  })
  it('convertToRoman(16) should return "XVI".', () => {
    const res = convertToRoman(16);
    assert.equal(res, 'XVI');
  })
  it('convertToRoman(29) should return "XXIX".', () => {
    const res = convertToRoman(29);
    assert.equal(res, 'XXIX');
  })
  it('convertToRoman(44) should return "XLIV".', () => {
    const res = convertToRoman(44);
    assert.equal(res, 'XLIV');
  })
  it('convertToRoman(45) should return "XLV"', () => {
    const res = convertToRoman(45);
    assert.equal(res, 'XLV');
  })
  it('convertToRoman(68) should return "LXVIII"', () => {
    const res = convertToRoman(68);
    assert.equal(res, 'LXVIII');
  })
  it('convertToRoman(83) should return "LXXXIII"', () => {
    const res = convertToRoman(83);
    assert.equal(res, 'LXXXIII');
  })
  it('convertToRoman(97) should return "XCVII"', () => {
    const res = convertToRoman(97);
    assert.equal(res, 'XCVII');
  })
  it('convertToRoman(99) should return "XCIX"', () => {
    const res = convertToRoman(99);
    assert.equal(res, 'XCIX');
  })
  it('convertToRoman(400) should return "CD"', () => {
    const res = convertToRoman(400);
    assert.equal(res, 'CD');
  })
  it('convertToRoman(500) should return "D"', () => {
    const res = convertToRoman(500);
    assert.equal(res, 'D');
  })
  it('convertToRoman(501) should return "DI"', () => {
    const res = convertToRoman(501);
    assert.equal(res, 'DI');
  })
  it('convertToRoman(649) should return "DCXLIX"', () => {
    const res = convertToRoman(649);
    assert.equal(res, 'DCXLIX');
  })
  it('convertToRoman(798) should return "DCCXCVIII"', () => {
    const res = convertToRoman(798);
    assert.equal(res, 'DCCXCVIII');
  })
  it('convertToRoman(891) should return "DCCCXCI"', () => {
    const res = convertToRoman(891);
    assert.equal(res, 'DCCCXCI');
  })
  it('convertToRoman(1000) should return "M"', () => {
    const res = convertToRoman(1000);
    assert.equal(res, 'M');
  })
  it('convertToRoman(1004) should return "MIV"', () => {
    const res = convertToRoman(1004);
    assert.equal(res, 'MIV');
  })
  it('convertToRoman(1006) should return "MVI"', () => {
    const res = convertToRoman(1006);
    assert.equal(res, 'MVI');
  })
  it('convertToRoman(1023) should return "MXXIII"', () => {
    const res = convertToRoman(1023);
    assert.equal(res, 'MXXIII');
  })
  it('convertToRoman(2014) should return "MMXIV"', () => {
    const res = convertToRoman(2014);
    assert.equal(res, 'MMXIV');
  })
  it('convertToRoman(3999) should return "MMMCMXCIX"', () => {
    const res = convertToRoman(3999);
    assert.equal(res, 'MMMCMXCIX');
  })
});


