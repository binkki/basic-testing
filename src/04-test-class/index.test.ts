// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';
import lodash from 'lodash';

describe('BankAccount', () => {
  const initialBalance = 100;
  let currentBankAccount = getBankAccount(initialBalance);

  beforeEach(() => {
    currentBankAccount = getBankAccount(initialBalance);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should create account with initial balance', () => {
    expect(currentBankAccount.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const withdrawResult = () =>
      currentBankAccount.withdraw(2 * initialBalance);
    expect(withdrawResult).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const recepient = getBankAccount(0);
    const transferResult = () =>
      currentBankAccount.transfer(2 * initialBalance, recepient);
    expect(transferResult).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const transferResult = () =>
      currentBankAccount.transfer(2 * initialBalance, currentBankAccount);
    expect(transferResult).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    currentBankAccount.deposit(initialBalance);
    expect(currentBankAccount.getBalance()).toBe(2 * initialBalance);
  });

  test('should withdraw money', () => {
    currentBankAccount.withdraw(initialBalance);
    expect(currentBankAccount.getBalance()).toBe(0);
  });

  test('should transfer money', () => {
    const recepient = getBankAccount(0);
    currentBankAccount.transfer(initialBalance, recepient);
    expect(currentBankAccount.getBalance()).toBe(0);
    expect(recepient.getBalance()).toBe(initialBalance);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest.spyOn(lodash, 'random').mockReturnValue(1);
    const balance = await currentBankAccount.fetchBalance();
    expect(balance).toBe(1);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(lodash, 'random').mockReturnValue(1);
    await currentBankAccount.synchronizeBalance();
    expect(currentBankAccount.getBalance()).toBe(1);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(lodash, 'random').mockReturnValue(0);
    await expect(currentBankAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
