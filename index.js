const calculateSubTotals = (items) => {
  const total = items.price * (1 - items.discount) * items.quantity

  // eslint-disable-next-line no-cond-assign
  if (items.total = parseInt(total * 100) / 100) {
    return items
  }
}

function calculateTotal(items) {
  return items.map(calculateSubTotals)
}
module.exports = calculateTotal
