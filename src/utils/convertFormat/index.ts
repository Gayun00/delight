import dayjs from "dayjs";
import { TransactionData } from "@/types/apis";

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
  return list.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};
