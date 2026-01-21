import React from "react";
import { Skeleton } from "../ui/skeleton";

function TrendingCoinOverview() {
  return (
    <div className="space-y-2 px-2">
      <Skeleton className="w-full rounded-md h-16 " />
      <Skeleton className="w-full rounded-md h-16" />
      <Skeleton className="w-full rounded-md h-16" />
      <Skeleton className="w-full rounded-md h-16" />
    </div>
  );
}

export default TrendingCoinOverview;
