export const addDollarSign = (inputStr: string) => {
  return inputStr.replace(/^([-+])/, "-$");
};
