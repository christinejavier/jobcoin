import { isValid } from 'date-fns';
import { parseTransactions } from '.';

const mockTransactions = [
  {
    timestamp: '2022-02-12T18:29:23.128Z',
    toAddress: 'Christine',
    amount: '50',
  },
  {
    timestamp: '2022-02-12T20:27:48.589Z',
    fromAddress: 'Christine',
    toAddress: 'Bob',
    amount: '10',
  },
];

const actual = parseTransactions(mockTransactions);

it('should use the first transaction in the API response as the first data point in transactional history', () => {
  expect(actual.amounts[0]).toEqual(50);
});

it('should keep a running balance of all transactions', () => {
  const expected = [50, 40];
  expect(actual.amounts).toEqual(expected);
});

it('should return a list of valid timestamps', () => {
  // This unit test is not explicit in asserting the rendered date due to the localizing nature of `toLocaleString`
  for (const timestamp of actual.timestamps) {
    expect(typeof timestamp).toEqual('string');
    expect(isValid(new Date(timestamp))).toEqual(true);
  }
});
