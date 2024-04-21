import dayjs from "dayjs";
import { TransactionData } from "@/types/apis";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const addDollarSign = (inputStr: string): string => {
  if (inputStr.includes("-")) {
    return inputStr.replace(/^([-+])/, "-$");
  }
  return "+$" + inputStr;
};

export const formatDateTime = (dateTimeStr: string) => {
  const formattedDateTime = dayjs(dateTimeStr).format("h.mm A");
  return formattedDateTime;
};

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const filterExpenseType = (list: TransactionData[]) => {
  return list.filter((data) => data.amount.includes("-"));
};

export const sortByTimestamp = (list: TransactionData[]) => {
  return list.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
};

export const generateDateArray = (startDate: string, endDate: string) => {
  let start = dayjs(startDate);
  const end = dayjs(endDate);

  const dates = [];

  while (start.isSameOrBefore(end)) {
    dates.push(start.format("YYYY-MM-DD"));
    start = start.add(1, "day");
  }

  return dates;
};

export const filterAndSumByDateRange = (
  transactions: TransactionData[],
  dates: string[]
) => {
  const result: {
    expense: number[];
    income: number[];
  } = {
    expense: [],
    income: [],
  };

  dates.forEach((date) => {
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionDate = dayjs(transaction.timestamp).format("YYYY-MM-DD");
      return transactionDate === date;
    });

    const totalIncome = filteredTransactions.reduce((sum, transaction) => {
      if (parseFloat(transaction.amount) > 0) {
        return sum + parseFloat(transaction.amount);
      }
      return sum;
    }, 0);

    const totalExpense = filteredTransactions.reduce((sum, transaction) => {
      if (parseFloat(transaction.amount) < 0) {
        return sum + parseFloat(transaction.amount);
      }
      return sum;
    }, 0);

    result.expense.push(parseFloat(Math.abs(totalExpense).toFixed(2)));
    result.income.push(parseFloat(Math.abs(totalIncome).toFixed(2)));
  });

  return result;
};

export const calculateDatesAWeekAgo = (date: string) => {
  const givenDate = dayjs(date);
  return givenDate.subtract(1, "week").format("YYYY-MM-DD");
};

export const calculateDatesAMonthAgo = (date: string) => {
  const givenDate = dayjs(date);
  return givenDate.subtract(1, "month").format("YYYY-MM-DD");
};

export const filterDatesInDateRange = (
  data: TransactionData[],
  startDate: string,
  endDate: string
) => {
  return data.filter((item) => {
    const timestamp = dayjs(item.timestamp);
    return (
      timestamp.isSameOrAfter(startDate) && timestamp.isSameOrBefore(endDate)
    );
  });
};
