import Calculator from './Calculator'

import data from './mockData'

describe('TD Calculator', () => {
  test('gives median for one investiment', () => {
    const calc = new Calculator()
    calc.add(data[0])

    const response = calc.median()
  
    const expectedMedian = {
      quantity: 0.18,
      tax: 2.56,
      price: 2802.4
    }
    expect(response).toEqual(expectedMedian);
  })

  test('gives median for multiple investiments', () => {
    const calc = new Calculator()
    data.map(transaction => calc.add(transaction))

    const response = calc.median()
  
    const expectedMedian = {
      quantity: 0.18,
      tax: 2.80,
      price: 2808.49
    }
    expect(response).toEqual(expectedMedian);
  })
  
  test('predicts median', () => {
    const calc = new Calculator()
    data.map(transaction => calc.add(transaction))

    const taxesToPredict = [2.70, 2.50, 2.00]
    const quantityToPredict = 0.18
    const response = calc.predicts(taxesToPredict, quantityToPredict)
  
    const expectedPrediction = [
      {
        totalQuantity: 2.14,
        medianQuantity: 0.18,
        tax: 2.79
      },
      {
        totalQuantity: 2.14,
        medianQuantity: 0.18,
        tax: 2.77
      },
      {
        totalQuantity: 2.14,
        medianQuantity: 0.18,
        tax: 2.73
      }
    ]

    expect(response).toEqual(expectedPrediction);
  })

  test.skip('gives total of values - ???? is it necessary ???', () => {

  })
})
