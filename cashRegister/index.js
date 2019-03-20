const CASH_VALUES = {
  'ONE HUNDRED': 100.,
  'TWENTY': 20.,
  'TEN': 10.,
  'FIVE': 5.,
  'ONE': 1.,
  'QUARTER': 0.25,
  'DIME': 0.1,
  'NICKEL': 0.05,
  'PENNY': 0.01,
};

const moneySubtract = (left, right) => (Math.round(left * 100) - Math.round(right * 100)) / 100;
const moneyAdd = (left, right) => (Math.round(left * 100) + Math.round(right * 100)) / 100;

const checkCashRegister = (price, cash, cid) => {
  let dueChange = moneySubtract(cash, price);
  let cashInDrawerTotal = cid.reduce((acc, [, amount]) => moneyAdd(acc, amount), 0);
  const change = [...cid]
    .sort(([name1, ], [name2,]) => CASH_VALUES[name2] - CASH_VALUES[name1])
    .reduce((acc, [ name, amount ]) => {
      const nb = Math.floor(dueChange / CASH_VALUES[name]);
      if (nb === 0 || !amount) {
        return acc;
      }
      const expectedChange = nb * CASH_VALUES[name];
      const change = expectedChange >= amount ? amount : expectedChange;

      acc.push([name, change]);
      dueChange = moneySubtract(dueChange, change);
      cashInDrawerTotal = moneySubtract(cashInDrawerTotal, change);

      return acc;
    }, []);

  if (dueChange > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  if (cashInDrawerTotal === 0) {
    return { status: 'CLOSED', change: cid };
  }
  return { status: 'OPEN', change };
}

module.exports = { checkCashRegister }
