import { fetcher } from "@/lib/coingecko.actions";
import React from "react";
import DataTable from "../DataTable";
import Link from "next/link";
import Image from "next/image";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";

const TrendingCoins = async () => {
  const trendhingCoins = await fetcher<{ coins: TrendingCoin[] }>(
    "/search/trending",
    undefined,
    300,
  );
  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: (coin) => {
        const item = coin.item;
        return (
          <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name} width={36} height={36} />
            <p>{item.name}</p>
          </Link>
        );
      },
    },
    {
      header: "24h Change",
      cellClassName: "name-cell",
      cell: (coin) => {
        const item = coin.item;
        const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
        return (
          <div
            className={cn(
              "price-change",
              isTrendingUp ? "text-green-500" : "text-red-500",
            )}
          >
            <div>
              {isTrendingUp ? (
                <div>
                  <TrendingUp width={16} height={16} />
                  <span>
                    {formatPercent(item.data.price_change_percentage_24h.usd)}%
                  </span>
                </div>
              ) : (
                <div>
                  <TrendingDown width={16} height={16} />
                  <span>
                    {formatPercent(item.data.price_change_percentage_24h.usd)}%
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      },
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: (coin) => formatCurrency(coin.item.data.price),
    },
  ];

  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>
      <DataTable
        data={trendhingCoins.coins.slice(0, 6) || []}
        columns={columns}
        rowKey={(coin) => coin.item.id}
      />
    </div>
  );
};

export default TrendingCoins;
