import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function RedlineLogo({
  href = "/",
  subtitle,
  className,
  imageClassName,
  width = 56,
  height = 56,
}: {
  href?: string;
  subtitle?: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/redline-mark.png"
        alt="Redline AI logo"
        width={width}
        height={height}
        className={cn("h-12 w-12 rounded-2xl object-contain", imageClassName)}
        priority
      />
      <div>
        <div className="font-display text-lg font-semibold tracking-[-0.03em] text-slate-950">Redline AI</div>
        {subtitle ? <div className="text-sm text-slate-500">{subtitle}</div> : null}
      </div>
    </Link>
  );
}
