import { request } from "@/utils/httpRequest";
import { RecentTransactionsResponse } from "@/types/apis";

export const getHistory = ({
  type,
  offset,
  limit,
  startDate,
  endDate,
}: {
  type: string;
  offset: number;
  limit: number;
  startDate?: string;
  endDate?: string;
}) => {
  return request.get<unknown, RecentTransactionsResponse>({
    path: "/history",
    queryParams: { type, offset, limit, startDate, endDate },
  });
};
