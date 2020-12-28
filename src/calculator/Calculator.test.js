import Calculator from './Calculator'

test('TD Calculator', () => {
  const investment = {
    value: 100,
    tax: 5,
    date: new Date('2020-01-01')
  }

  const calc = new Calculator()
  calc.invest(investment)
  const result = calc.result()
  console.log(result)

  expect(result).toBe(104.96);
});
