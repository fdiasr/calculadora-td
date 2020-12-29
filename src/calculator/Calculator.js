import FractionCalculator from './FractionCalculator'

class Calculator {
  constructor(items = []) {
    this.items = items
  }

  invest(item) {
    this.items.push(item)
  }

  median() {
    const item = this.items[0]

    const calculated = FractionCalculator.for(item)

    return {
      quantity: item.fraction,
      tax: item.tax,
      price: item.price
    }
  }
}

export default Calculator
