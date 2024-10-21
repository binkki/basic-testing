// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const firstNumber = 5;
    const secondNumber = 10;
    const data = {
      a: firstNumber,
      b: secondNumber,
      action: Action.Add,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(firstNumber + secondNumber);
  });

  test('should subtract two numbers', () => {
    const firstNumber = 5;
    const secondNumber = 10;
    const data = {
      a: firstNumber,
      b: secondNumber,
      action: Action.Subtract,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(firstNumber - secondNumber);
  });

  test('should multiply two numbers', () => {
    const firstNumber = 5;
    const secondNumber = 10;
    const data = {
      a: firstNumber,
      b: secondNumber,
      action: Action.Multiply,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(firstNumber * secondNumber);
  });

  test('should divide two numbers', () => {
    const firstNumber = 5;
    const secondNumber = 10;
    const data = {
      a: firstNumber,
      b: secondNumber,
      action: Action.Divide,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(firstNumber / secondNumber);
  });

  test('should exponentiate two numbers', () => {
    const firstNumber = 5;
    const secondNumber = 10;
    const data = {
      a: firstNumber,
      b: secondNumber,
      action: Action.Exponentiate,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(firstNumber ** secondNumber);
  });

  test('should return null for invalid action', () => {
    const firstNumber = 5;
    const secondNumber = 10;
    const data = {
      a: firstNumber,
      b: secondNumber,
      action: "wrong action",
    };
    const result = simpleCalculator(data);
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const firstNumber = "wrong argument";
    const secondNumber = 10;
    const dataWithWrongFirst = {
      a: firstNumber,
      b: secondNumber,
      action: Action.Add,
    };
    const dataWithWrongSecond = {
      a: secondNumber,
      b: firstNumber,
      action: Action.Add,
    };
    const resultWithWrongFirst = simpleCalculator(dataWithWrongFirst);
    const resultWithWrongSecond = simpleCalculator(dataWithWrongSecond);
    expect(resultWithWrongFirst).toBe(null);
    expect(resultWithWrongSecond).toBe(null);
  });
});
