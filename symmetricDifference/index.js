const isNotEmptyArray = (obj) => Array.isArray(obj) && obj.length > 0;

const getDiff = (left, right) => {
  const res = left.reduce((acc, curr) => {
    const prevLength = right.length;
    right = right.filter(x => x !== curr);

    if (prevLength === right.length && !acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return right.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, res).sort();
}

const sym = (first, second, ...rest) => {
  if (isNotEmptyArray(first)) {
    if (isNotEmptyArray(second)) {
      const result = getDiff(first, second);

      if (isNotEmptyArray(rest)) {
        return sym(result, ...rest);
      }
      return result;
    }
  }
  return first;
}

module.exports = { sym }