import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number) {
  if (value == null) return "0";

  if (value >= 1e9) return (value / 1e9).toFixed(2).replace(/\.0+$/, "") + "B";
  if (value >= 1e6) return (value / 1e6).toFixed(2).replace(/\.0+$/, "") + "M";

  return Math.round(value).toLocaleString();
}

export function calculateCurrentSupply(
  pools: {
    marketCap?: {
      usd?: number;
    };
    price?: {
      usd?: number;
    };
  }[],
) {
  for (const pool of pools) {
    if (pool?.marketCap?.usd && pool?.price?.usd)
      return pool.marketCap.usd / pool.price.usd;
  }
  return 0;
}
