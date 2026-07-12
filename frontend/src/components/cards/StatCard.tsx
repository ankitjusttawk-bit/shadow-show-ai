import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        <div className="rounded-lg bg-blue-600/20 p-3 text-blue-400">
          {icon}
        </div>
      </div>
    </div>
  );
}