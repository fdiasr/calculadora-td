const _MS_PER_DAY = 1000 * 60 * 60 * 24;

class Calculator {
  constructor() {
    this.items = []
  }

  invest(item) {
    this.items.push(item)
  }

  result() {
    const item = this.items[0]
    const today = new Date()

    const diff = parseInt((today - item.date) / _MS_PER_DAY)

    const pd = item.tax / 365

    const tax_calc = diff * pd
    
    const result = item.value * (tax_calc / 100)

    return parseFloat(item.value) + parseFloat(result.toFixed(2))
  }
}

export default Calculator
