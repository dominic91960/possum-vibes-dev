"use client";

import { useEffect, useState } from "react";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return isLoading ? (
    <main className="bg-secondary flex h-dvh items-center justify-center">
      <p>Loading...</p>
    </main>
  ) : (
    <>{children}</>
  );
}
