import _ from 'lodash'

import FractionCalculator from './FractionCalculator'

class Calculator {
  constructor(transactions = []) {
    this.transactions = transactions
  }

  add(transaction) {
    this.transactions.push(transaction)
  }

  median() {
    const fractions = _.map(this.transactions, this.calculateFraction)
    const quantity = _.round(this.calculateTotalQuantity(fractions), 2)

    return {
      quantity,
      tax: this.calculateMedianTax(fractions, quantity),
      price: this.calculateMedianPrice(fractions, quantity)
    }
  }

  calculateFraction(transaction) {
    return FractionCalculator.for(transaction)
  }

  calculateTotalQuantity(fractions) {
    return _.sumBy(fractions, item => item.fraction)
  }

  calculateMedianTax(fractions, quantity) {
    const tax = _.sumBy(fractions, item => item.fraction_tax) / quantity
    return _.round(tax, 2)
  }

  calculateMedianPrice(fractions, quantity) {
    const price = _.sumBy(fractions, item => item.fraction_value) / quantity
    return _.round(price, 2)
  }
}

export default Calculator
