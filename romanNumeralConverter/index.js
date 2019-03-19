const cond = condFuncPairs => value => {
  for (const [ cond, func ] of condFuncPairs) {
    if (cond(value)) {
      return func(value);
    }
  }
  return value;
};

const eq = value1 => value2 => value1 === value2;

const makeNumToRoman = ([unit, romanUnit], [midUnit, romanMidUnit], [upperUnit, romanUpperUnit]) => input => {
  const n =  Math.floor((input % upperUnit) / unit) * unit;
  const repeat = (n % midUnit) / unit;

  const isUnitToRepeatDown = n => n >= unit && n < midUnit - unit; // e.g: 1,2,3
  const isUnitToRepeatUp = n => n > midUnit && n < upperUnit; // e.g: 6,7,8

  return cond([
    [ eq(midUnit - unit), () => `${romanUnit}${romanMidUnit}` ],
    [ eq(midUnit), () => `${romanMidUnit}` ],
    [ eq(upperUnit - unit), () => `${romanUnit}${romanUpperUnit}` ],
    [ eq(upperUnit), () => `${romanUpperUnit}` ],
    [ isUnitToRepeatDown, () => new Array(repeat).fill(romanUnit, romanUnit).join('') ],
    [ isUnitToRepeatUp, () => `${romanMidUnit}${new Array(repeat).fill(romanUnit).join('')}` ],
    [ () => true, () => '' ],
  ])(n);
};

const onesToRoman = makeNumToRoman([1, 'I'], [5, 'V'], [10, 'X']);
const tensToRoman = makeNumToRoman([10, 'X'], [50, 'L'], [100, 'C']);
const hundredsToRoman = makeNumToRoman([100, 'C'], [500, 'D'], [1000, 'M']);
const thousandsToRoman = makeNumToRoman([1000, 'M'], [5000, 'ↁ'], [10000, 'ↂ']);

const makeConverter = converterStages => input => converterStages.reduce((acc, curr) => curr(input) + acc, '');

const convertToRoman = makeConverter([
  onesToRoman,
  tensToRoman,
  hundredsToRoman,
  thousandsToRoman
]);

module.exports = { convertToRoman }
