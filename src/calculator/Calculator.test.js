import Calculator from './Calculator'

import data from './mockData'

test('TD Calculator', () => {

  const calc = new Calculator()
  calc.invest(data[0])
  const result = calc.result()

  expect(result.fraction_tax).toBe(0.46);
  expect(result.fraction_value).toBe(504.43);
});
