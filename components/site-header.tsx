import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/[0.75] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="gradient-stroke flex h-11 w-11 items-center justify-center rounded-2xl text-slate-950 shadow-soft">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="font-display text-lg font-semibold text-slate-950">Consumer Behavior Decoder</div>
            <div className="text-xs text-slate-500">AI marketing intelligence</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-500 lg:flex">
          <Link href="#product" className="transition hover:text-slate-950">
            Product
          </Link>
          <Link href="#features" className="transition hover:text-slate-950">
            Features
          </Link>
          <Link href="#how-it-works" className="transition hover:text-slate-950">
            How it works
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost">Sign in</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
