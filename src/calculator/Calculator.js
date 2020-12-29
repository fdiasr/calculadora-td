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
    const fractions = _.map(this.transactions, item => FractionCalculator.for(item))
    return {
      quantity: this.calculateTotalQuantity(fractions),
      tax: this.calculateMedianTax(fractions),
      price: this.calculateMedianPrice(fractions)
    }
  }

  calculateTotalQuantity(fractions) {
    return _.sumBy(fractions, item => item.fraction)
  }

  calculateMedianTax(fractions) {
    const quantity = this.calculateTotalQuantity(fractions)
    const tax = _.sumBy(fractions, item => item.fraction_tax) / quantity
    return _.round(tax, 2)
  }

  calculateMedianPrice(fractions) {
    const quantity = this.calculateTotalQuantity(fractions)
    const price = _.sumBy(fractions, item => item.fraction_value) / quantity
    return _.round(price, 2)
  }
}

export default Calculator
