import Calculator from './Calculator'

import data from './mockData'

describe('TD Calculator', () => {
  test('gives median for 1 investiment', () => {
    const calc = new Calculator()
    calc.invest(data[0])
    const response = calc.median()
  
    const expectedMedian = {
      quantity: 0.18,
      tax: 2.56,
      price: 2802.40
    }
    expect(response).toEqual(expectedMedian);
  });  
})
