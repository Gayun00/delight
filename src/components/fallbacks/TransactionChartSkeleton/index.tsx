import { Skeleton } from "@/components/ui/skeleton";

const TransactionChartSkeleton = () => {
  return (
    <div>
      <Skeleton className="mt-[10px] mb-[47px] w-[100px] h-[22px] rounded-md" />
      <Skeleton className="w-full h-[161px] rounded-md" />
    </div>
  );
};

export default TransactionChartSkeleton;
