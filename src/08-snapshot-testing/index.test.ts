// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

const values = [1, 2, 3, 4, 5];
const epectedResult = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: null,
            next: null,
          },
        },
      },
    },
  }, 
};

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const resultList = generateLinkedList(values);
    expect(resultList).toStrictEqual(epectedResult);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const resultList = generateLinkedList(values);
    expect(resultList).toMatchSnapshot();
  });
});
