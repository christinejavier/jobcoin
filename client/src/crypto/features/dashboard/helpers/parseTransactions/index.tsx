interface Transaction {
  timestamp: string;
  toAddress: string;
  fromAddress?: string;
  amount: string;
}

/**
 * The transactions API does not include the running balance of the user (aka "address") at any point in time.
 * The API only provides a list of transactions over time that represent an amount sent or received from one user to another.
 * Thus, this function calculates the running balance consummable by Charts JS.
 * This calculation works by looking at the first transaction ever made at a user's address.
 * The first transaction provides information about: a) the user whose balance we will track over time and b) the amount of money the user has at the beginning.
 * Every other transaction will be used to either subtract or add to the running balance based on the provided amount and the toAddress field.
 */
const parseTransactions = (transactions: Transaction[]) => {
  const amounts: number[] = [];
  const timestamps: string[] = [];
  let runningBalance = 0;
  let addressName: string;

  transactions.forEach((txn, ind) => {
    const intAmount: number = parseFloat(txn.amount);

    if (ind === 0) {
      runningBalance = intAmount;
      addressName = txn.toAddress;
    } else {
      if (txn.toAddress !== addressName) {
        runningBalance -= intAmount;
      } else {
        runningBalance += intAmount;
      }
    }

    amounts.push(runningBalance);
    timestamps.push(new Date(txn.timestamp).toLocaleString());
  });

  return {
    amounts,
    timestamps,
  };
};

export { parseTransactions };
