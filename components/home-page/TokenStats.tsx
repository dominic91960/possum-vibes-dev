"use client";

import React, { useEffect, useState } from "react";
import { formatNumber } from "@/lib/utils";

const TokenStats = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    holders: 0,
    liquidity: 0,
    marketCap: 0,
    volume24h: 0,
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const holdersRes = await fetch(
          "https://data.solanatracker.io/tokens/8C4RygkxmePm9ys1qCcAB46dUCXNQYTaqfxS5mBrpump",
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_SOLANATRACKER_API_KEY || "",
            },
          },
        );

        const priceRes = await fetch(
          "https://data.solanatracker.io/price?token=8C4RygkxmePm9ys1qCcAB46dUCXNQYTaqfxS5mBrpump",
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_SOLANATRACKER_API_KEY || "",
            },
          },
        );

        const volumeRes = await fetch(
          "https://data.solanatracker.io/stats/8C4RygkxmePm9ys1qCcAB46dUCXNQYTaqfxS5mBrpump",
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_SOLANATRACKER_API_KEY || "",
            },
          },
        );

        if (!holdersRes.ok || !priceRes.ok || !volumeRes.ok) throw new Error();

        const holdersData = await holdersRes.json();
        const priceData = await priceRes.json();
        const volumeData = await volumeRes.json();
        const formattedData = {
          holders: holdersData.holders,
          liquidity: priceData.liquidity,
          marketCap: priceData.marketCap,
          volume24h: volumeData["24h"].volume.total,
        };
        setData(formattedData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
        console.log(process.env.NEXT_PUBLIC_SOLANATRACKER_API_KEY);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid h-fit grid-cols-1 gap-[1.5em] text-[16px] sm:text-[20px] md:text-[24px] lg:pb-[1.5em] lg:text-[28px] xl:grid-cols-2 xl:pb-[3.5em] xl:text-[32px] 2xl:text-[36px]">
      <div className="bg-light border-dark rounded-[1em] border-[0.1em] p-[1em] text-center text-[#212121] shadow-[0.2em_0.2em_var(--color-dark)]">
        {error && <p className="text-[2em] font-bold">???</p>}
        {!error && loading && (
          <div className="border-t-dark border-dark/30 relative mx-auto mb-[0.3em] size-[2em] animate-spin rounded-full border-2"></div>
        )}
        {!error && !loading && (
          <p className="text-[2em] font-bold">{formatNumber(data.holders)}</p>
        )}
        <p className="uppercase">holders</p>
      </div>

      <div className="bg-light border-dark rounded-[1em] border-[0.1em] p-[1em] text-center text-[#212121] shadow-[0.2em_0.2em_var(--color-dark)]">
        {error && <p className="text-[2em] font-bold">???</p>}
        {!error && loading && (
          <div className="border-t-dark border-dark/30 relative mx-auto mb-[0.3em] size-[2em] animate-spin rounded-full border-2"></div>
        )}
        {!error && !loading && (
          <p className="text-[2em] font-bold">{formatNumber(data.liquidity)}</p>
        )}
        <p className="uppercase">liquidity</p>
      </div>

      <div className="bg-light border-dark rounded-[1em] border-[0.1em] p-[1em] text-center text-[#212121] shadow-[0.2em_0.2em_var(--color-dark)]">
        {error && <p className="text-[2em] font-bold">???</p>}
        {!error && loading && (
          <div className="border-t-dark border-dark/30 relative mx-auto mb-[0.3em] size-[2em] animate-spin rounded-full border-2"></div>
        )}
        {!error && !loading && (
          <p className="text-[2em] font-bold">
            {formatNumber(data.marketCap, "marketCap")}
          </p>
        )}
        <p className="uppercase">marketCap</p>
      </div>

      <div className="bg-light border-dark rounded-[1em] border-[0.1em] p-[1em] text-center text-[#212121] shadow-[0.2em_0.2em_var(--color-dark)]">
        {error && <p className="text-[2em] font-bold">???</p>}
        {!error && loading && (
          <div className="border-t-dark border-dark/30 relative mx-auto mb-[0.3em] size-[2em] animate-spin rounded-full border-2"></div>
        )}
        {!error && !loading && (
          <p className="text-[2em] font-bold">{formatNumber(data.volume24h)}</p>
        )}
        <p className="uppercase">volume 24h</p>
      </div>
    </div>
  );
};

export default TokenStats;
