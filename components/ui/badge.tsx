import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
