import dayjs from "dayjs";

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
