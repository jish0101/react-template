import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const Paper = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("bg-white rounded-sm shadow-box", className)} {...rest}>
      {children}
    </div>
  );
};

export default Paper;
