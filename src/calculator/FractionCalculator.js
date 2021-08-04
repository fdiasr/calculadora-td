import _ from 'lodash'

class FractionCalculator {

  static for(transaction) {
    const fraction_tax = FractionCalculator.taxFor(transaction)
    const fraction_value = FractionCalculator.valueFor(transaction)

    return {
      ...transaction,
      fraction_tax,
      fraction_value
    }
  }

  static taxFor(transaction) {
    const tax = transaction.tax * transaction.quantity
    return _.round(tax, 6)
  }

  static valueFor(transaction) {
    const value = transaction.price * transaction.quantity
    return _.round(value, 6)
  }
}

export default FractionCalculator
