import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number, type = "default") {
  if (value == null) return "0";

  // MarketCap: use shorthand (K, M, B)
  if (type === "marketCap") {
    if (value >= 1e9)
      return (value / 1e9).toFixed(2).replace(/\.0+$/, "") + "B";
    if (value >= 1e6)
      return (value / 1e6).toFixed(2).replace(/\.0+$/, "") + "M";
    if (value >= 1e3)
      return (value / 1e3).toFixed(2).replace(/\.0+$/, "") + "K";
    return value.toLocaleString();
  }

  // Default: just format with commas, round if needed
  return Math.round(value).toLocaleString();
}
