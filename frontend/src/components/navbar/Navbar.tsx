import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-700 bg-slate-800 px-6">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Dashboard
        </h2>
      </div>

      {/* Center */}
      <div className="hidden w-full max-w-md px-8 lg:block">
        <div className="flex items-center rounded-lg border border-slate-600 bg-slate-900 px-3">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search dashboards..."
            className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 transition hover:bg-slate-700">
          <Bell size={20} className="text-slate-300" />
        </button>

        <div className="flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-blue-600">
            A
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-semibold text-white">
              Alpha
            </p>

            <p className="text-xs text-blue-100">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
);
}