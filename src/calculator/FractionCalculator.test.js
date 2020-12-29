import FractionCalculator from './FractionCalculator'

import data from './mockData'

describe('Fraction Calculator', () => {
  test('gives Tax and Value of fraction', () => {
    const transaction = data[0]
    const result = FractionCalculator.for(transaction)
  
    const calculatedTransaction = {
      ...transaction,
      fraction_tax: 0.460800,
      fraction_value: 504.432000
    }

    expect(result).toEqual(calculatedTransaction);
  });
})
