const Calculator = require('../calculator')

test('1 plus 2 equals 3', () => {
  const calc = new Calculator()
  expect(calc.add(1, 2)).toBe(3)
})

test('10 minus 5 equals 5', () => {
  const calc = new Calculator()
  expect(calc.sub(10, 5)).toBe(10)
})

test('3 multiply by 3 equals 9', () => {
  const calc = new Calculator()
  expect(calc.mul(3, 3)).toBe(9)
})

test('100 divided by 10 equals 10', () => {
  const calc = new Calculator()
  expect(calc.div(100, 10)).toBe(10)
})