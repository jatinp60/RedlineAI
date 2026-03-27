import { Search } from "lucide-react";

export function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/90 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
      />
    </div>
  );
}
