import React from "react";
import { Skeleton } from "../ui/skeleton";

const CategoriesSkeleton = () => {
  return (
    <div>
      <div className="space-y-2 px-2">
        <div className="flex gap-3">
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
        </div>
        <div className="flex gap-3">
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
        </div>
        <div className="flex gap-3">
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
        </div>
        <div className="flex gap-3">
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
          <Skeleton className="flex-1 rounded-md h-16 " />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
