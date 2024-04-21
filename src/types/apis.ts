export interface TransactionData {
  amount: string;
  name: string;
  timestamp: string;
  type: string;
}

export interface RecentTransactionsResponse {
  data: TransactionData[];
}
