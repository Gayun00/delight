import { request } from "@/utils/httpRequest";
import { RecentTransactionsResponse } from "@/types/apis";

export const getHistory = ({
  type,
  offset,
  limit,
}: {
  type: string;
  offset: number;
  limit: number;
}) => {
  return request.get<unknown, RecentTransactionsResponse>({
    path: "/history",
    queryParams: { type, offset, limit },
  });
};
