const updateInventory = (arr1, arr2) => {
  const inventoryObj = [ ...arr1, ...arr2].reduce((acc, [ count, item ]) => {
    acc[item] = acc[item] ? acc[item] + count : count;
    return acc;
  }, {});

  return Object.keys(inventoryObj).reduce((acc, key) => {
    acc.push([ inventoryObj[key], key ])
    return acc;
  }, []).sort(([, item1 ], [, item2]) => item1.localeCompare(item2)); 
}

module.exports = { updateInventory };