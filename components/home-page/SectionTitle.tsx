import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  text: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  className = "",
}) => {
  return (
    <h1
      className={cn(
        "section-title text-[40px] font-black uppercase italic sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[100px] 2xl:text-[115px]",
        className,
      )}
    >
      {text}
    </h1>
  );
};

export default SectionTitle;
