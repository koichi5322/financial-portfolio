import { fetcher } from "@/lib/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import CandlestickChart from "./CandlestickChart";

const CoinOverview = async () => {
  let coin: CoinDetailsData;
  let coinOHLCData: OHLCData[];
  try {
    [coin, coinOHLCData] = await Promise.all([
      fetcher<CoinDetailsData>("/coins/bitcoin", {
        dex_pair_format: "symbol",
      }),
      fetcher<OHLCData[]>("/coins/bitcoin/ohlc", {
        vs_currency: "usd",
        days: 1,

        precision: "full",
      }),
    ]);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return (
      <div>
        <span className="text-red-500">エラーが発生しました。</span>
        <div>{message}</div>
      </div>
    );
  }
  return (
    // TODO: fix inteval , now is dummy
    <div id="coin-overview">
      <CandlestickChart
        data={coinOHLCData}
        coinId="bitcoin"
        liveInterval="1s"
        setLiveInterval={(interval: "1s" | "1m") => void {}}
      >
        <div className="header pt-2">
          <Image
            src={coin.image.large}
            alt={coin.name}
            width={56}
            height={56}
          />
          <div className="info">
            <p>
              {coin.name} / {coin.symbol.toUpperCase()}
            </p>
            <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
          </div>
        </div>
      </CandlestickChart>
    </div>
  );
};

export default CoinOverview;
