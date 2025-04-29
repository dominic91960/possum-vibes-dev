import React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText?: string;
};

const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, buttonText = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-primary border-dark text-dark w-fit rounded-[0.5em] border-[0.1em] px-[3em] py-[0.7em] text-[16px] font-bold uppercase shadow-[0.15em_0.15em_0_var(--color-dark)] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]",
          className,
        )}
        {...props}
      >
        {children ?? buttonText}
      </button>
    );
  },
);
PrimaryButton.displayName = "Button"; //Counters the Component definition is missing display name warning

export default PrimaryButton;
