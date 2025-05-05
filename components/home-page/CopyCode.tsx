"use client";

import React, { useState } from "react";

const CopyCode = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(
      "8C4RygkxmePm9ys1qCcAB46dUCXNQYTaqfxS5mBrpump",
    );
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <p
      className="mt-[1em] mb-[1.2em] cursor-pointer text-[20px] font-bold text-[#25F706] sm:text-[23px] md:text-[26px] lg:mt-[0.2em] lg:text-[29px] xl:text-[32px] 2xl:text-[35px]"
      onClick={onCopy}
    >
      {isCopied ? "Copied to Clipboard!" : "Copy to Clipboard"}
    </p>
  );
};

export default CopyCode;
