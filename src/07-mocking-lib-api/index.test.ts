// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

const baseURL = 'https://jsonplaceholder.typicode.com';
const endpoint = '/todos/1';
const endpointData = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false,
};

describe('throttledGetDataFromApi', () => {
  beforeAll(() => jest.useFakeTimers());
  beforeEach(() => jest.runOnlyPendingTimers());
  afterEach(() => jest.restoreAllMocks());
  afterAll(() => jest.useRealTimers());

  test('should create instance with provided base url', async () => {
    jest.spyOn(axios, 'create');
    await throttledGetDataFromApi(endpoint);
    expect(axios.create).toHaveBeenCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async () => {
    jest.spyOn(axios.Axios.prototype, 'get');
    await throttledGetDataFromApi(endpoint);
    expect(axios.Axios.prototype.get).toHaveBeenCalledWith(endpoint);
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi(endpoint);
    expect(JSON.stringify(result)).toBe(JSON.stringify(endpointData));
  });
});