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
    return parseFloat((transaction.tax * transaction.fraction).toFixed(2))
  }

  static valueFor(transaction) {
    return parseFloat((transaction.price * transaction.fraction).toFixed(2))
  }
}

export default FractionCalculator
