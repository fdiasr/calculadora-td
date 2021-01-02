import Calculator from './Calculator'

import data from './mockData'

describe('TD Calculator', () => {
  test('gives median for 1 investiment', () => {
    const calc = new Calculator()
    data.map(transaction => calc.add(transaction))

    const response = calc.median()
  
    const expectedMedian = {
      quantity: 1.96,
      tax: 2.80,
      price: 2808.49
    }
    expect(response).toEqual(expectedMedian);
  });  
})
