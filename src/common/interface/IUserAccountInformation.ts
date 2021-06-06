export interface IUserAccountInformation {
  currency: string;
  balance: number;
}

export interface ITransaction {
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount: number;
  date: string;
  exchangeRate: number;
}

export type TransactionHistory = ITransaction[];
