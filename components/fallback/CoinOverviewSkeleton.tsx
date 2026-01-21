import { Skeleton } from "@/components/ui/skeleton";

function CoinOverviewSkeleton() {
  return (
    <div id="coin-over-view-fallback">
      <div className="header  pt-2">
        <Skeleton className="w-full rounded-md h-12" />
      </div>
      <div className="chard">
        <Skeleton className="w-full rounded-md h-48 mt-4" />
      </div>
    </div>
  );
}

export default CoinOverviewSkeleton;
