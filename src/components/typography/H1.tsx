import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export default function H1({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...rest}
      className={cn(
        "scroll-m-20 text-2xl font-[800] tracking-tight sm:text-3xl xl:text-4xl 2xl:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
