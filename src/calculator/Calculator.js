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
    const totalQuantity = _.round(this.calculateTotalQuantity(fractions), 2)

    return {
      quantity: this.calculateMedianQuantity(fractions, totalQuantity),
      tax: this.calculateMedianTax(fractions, totalQuantity),
      price: this.calculateMedianPrice(fractions, totalQuantity)
    }
  }

  calculateFraction(transaction) {
    return FractionCalculator.for(transaction)
  }

  calculateTotalQuantity(fractions) {
    return _.sumBy(fractions, item => item.fraction)
  }

  calculateMedianQuantity(fractions, totalQuantity) {
    const quantity = totalQuantity / fractions.length
    return _.round(quantity, 2)
  }

  calculateMedianTax(fractions, quantity) {
    const tax = _.sumBy(fractions, item => item.fraction_tax) / quantity
    return _.round(tax, 2)
  }

  calculateMedianPrice(fractions, quantity) {
    const price = _.sumBy(fractions, item => item.fraction_value) / quantity
    return _.round(price, 2)
  }

  predicts(futureTransactions) {
    return _.map(futureTransactions, transaction => this.predictsTax(transaction))
  }

  predictsTax(futureTransaction) {
    const transactions = this.predictionFor(futureTransaction)

    const fractions = _.map(transactions, this.calculateFraction)
    const totalQuantity = _.round(this.calculateTotalQuantity(fractions), 2)

    return {
      totalQuantity,
      medianQuantity: this.calculateMedianQuantity(fractions, totalQuantity),
      tax: this.calculateMedianTax(fractions, totalQuantity),
      price: this.calculateMedianPrice(fractions, totalQuantity)
    }
  }

  // change params to receive object and apply desctructing
  predictionFor(futureTransaction) {
    const transactions = [...this.transactions]
    transactions.push(futureTransaction)
    return transactions
  }
}

export default Calculator
