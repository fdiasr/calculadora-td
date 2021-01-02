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

  predicts(taxes, quantity) {
    return _.map(taxes, tax => this.predictsTax(tax, quantity))
  }

  predictsTax(tax, quantity) {
    const transactions = this.transactionsToPredictWith(tax, quantity)

    const fractions = _.map(transactions, this.calculateFraction)
    const totalQuantity = _.round(this.calculateTotalQuantity(fractions), 2)

    return {
      totalQuantity,
      medianQuantity: this.calculateMedianQuantity(fractions, totalQuantity),
      tax: this.calculateMedianTax(fractions, totalQuantity)
    }
  }

  transactionsToPredictWith(tax, quantity) {
    const transactions = [...this.transactions]
    const predictedTransaction = { tax: tax, fraction: quantity }
    transactions.push(predictedTransaction)
    return transactions
  }
}

export default Calculator
