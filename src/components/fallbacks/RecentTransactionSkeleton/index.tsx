import { Skeleton } from "@/components/ui/skeleton";

const RecentTransactionSkeleton = () => {
  return (
    <div className="flex flex-col space-y-[20px]">
      <Skeleton className="w-full h-[51px] rounded-md" />
      <Skeleton className="w-full h-[51px] rounded-md" />
      <Skeleton className="w-full h-[51px] rounded-md" />
      <Skeleton className="w-full h-[51px] rounded-md" />
    </div>
  );
};

export default RecentTransactionSkeleton;
