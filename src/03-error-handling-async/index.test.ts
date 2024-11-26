// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 1;
    const resolveResult = await resolveValue(value);
    expect(resolveResult).toBe(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errorMesage = 'This mesage was thrown';
    const throwResult = () => throwError(errorMesage);
    expect(throwResult).toThrow(errorMesage);
  });

  test('should throw error with default message if message is not provided', () => {
    const throwResult = () => throwError();
    expect(throwResult).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const throwCustomResult = () => throwCustomError();
    expect(throwCustomResult).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
