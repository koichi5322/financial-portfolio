import CoinOverviewSkeleton from "@/components/fallback/CoinOverviewSkeleton";
import TrendingCoinOverview from "@/components/fallback/TrendingCoinOverview";
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";

import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewSkeleton />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinOverview />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
}
