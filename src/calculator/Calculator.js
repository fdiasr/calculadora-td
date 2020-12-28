const _MS_PER_DAY = 1000 * 60 * 60 * 24;

class Calculator {
  constructor(items = []) {
    this.items = items
  }

  invest(item) {
    this.items.push(item)
  }

  result() {
    const item = this.items[0]
    item.fraction_tax = parseFloat((item.tax * item.fraction).toFixed(2))
    item.fraction_value = parseFloat((item.price * item.fraction).toFixed(2))

    return item
  }
}

export default Calculator
