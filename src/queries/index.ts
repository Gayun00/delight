import { getHistory } from "@/apis";
import { useQuery } from "@tanstack/react-query";

const queryKeys = {
  all: ["history"] as const,
  list: (type: string) => [...queryKeys.all, type] as const,
};

export const useHistoryQuery = ({
  type,
  offset = 0,
  limit = 0,
  startDate = "",
  endDate = "",
}: {
  type: string;
  offset?: number;
  limit?: number;
  startDate?: string;
  endDate?: string;
}) => {
  return useQuery({
    queryKey: queryKeys.list(type),
    queryFn: () => {
      return getHistory({ type, offset, limit, startDate, endDate });
    },
  });
};
