import { request } from "@/utils/httpRequest";
import { RecentTransactionsResponse } from "@/types/apis";

export const getHistory = (type: string) => {
  return request.get<unknown, RecentTransactionsResponse>({
    path: "/history",
    queryParams: { type },
  });
};
