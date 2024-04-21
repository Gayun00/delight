import { getHistory } from "@/apis";
import { useQuery } from "@tanstack/react-query";

const queryKeys = {
  all: ["history"] as const,
  list: (type: string) => [...queryKeys.all, type] as const,
};

export const useHistoryQuery = (type: string) => {
  return useQuery({
    queryKey: queryKeys.list(type),
    queryFn: () => getHistory(type),
  });
};
