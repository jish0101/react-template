import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export default function H2({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...rest}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 md:text-3xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
