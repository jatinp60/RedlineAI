import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { BackgroundOrbs } from "@/components/background-orbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AuthCard({
  mode,
}: {
  mode: "login" | "signup";
}) {
  const isLogin = mode === "login";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundOrbs />
      <div className="container relative flex min-h-screen items-center justify-center py-12">
        <Card className="w-full max-w-md rounded-[40px] border border-white/75 bg-white/[0.82] p-8 shadow-card md:p-10">
          <Link href="/" className="mb-10 inline-flex items-center gap-3">
            <div className="gradient-stroke flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft">
              <Sparkles className="h-4 w-4 text-slate-900" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold text-slate-950">Consumer Behavior Decoder</div>
              <div className="text-xs text-slate-500">AI marketing intelligence</div>
            </div>
          </Link>

          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-slate-400">
              {isLogin ? "Welcome back" : "Create your workspace"}
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold text-slate-950">
              {isLogin ? "Sign in to your dashboard." : "Start building smarter campaigns."}
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {isLogin
                ? "Return to your projects, audience insights, channel planning, and ad analysis workflows."
                : "Create a premium workspace for consumer behavior insights, niche targeting, and campaign optimization."}
            </p>
          </div>

          <form className="mt-8 space-y-4">
            {!isLogin ? <Input placeholder="Full name" /> : null}
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
            {!isLogin ? <Input placeholder="Company or role" /> : null}
            <Link href="/dashboard" className="block">
              <Button className="w-full" size="lg">
                {isLogin ? "Enter dashboard" : "Create account"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </form>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-600">
            Demo authentication flow. The UI is styled like a real product and routes into the seeded SaaS experience.
          </div>

          <div className="mt-6 text-sm text-slate-500">
            {isLogin ? "Need an account?" : "Already have an account?"}{" "}
            <Link href={isLogin ? "/signup" : "/login"} className="font-semibold text-slate-900 transition hover:text-sky-700">
              {isLogin ? "Sign up" : "Sign in"}
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
