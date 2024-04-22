import { getHistory } from "@/apis";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Params {
  type: string;
  offset?: number;
  limit?: number;
  startDate?: string;
  endDate?: string;
}

const queryKeys = {
  all: ["history"] as const,
  list: (params: Params) => [...queryKeys.all, params] as const,
};

export const useHistoryQuery = ({
  type,
  offset = 0,
  limit = 0,
  startDate = "",
  endDate = "",
}: Params) => {
  return useSuspenseQuery({
    queryKey: queryKeys.list({ type, offset, limit, startDate, endDate }),
    queryFn: () => {
      return getHistory({ type, offset, limit, startDate, endDate });
    },
  });
};
