import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Redline AI",
  description:
    "Premium text comparison for spotting additions, deletions, and rewrites across drafts.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
