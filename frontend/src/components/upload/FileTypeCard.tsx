import type { ReactNode } from "react";

type FileTypeCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FileTypeCard({
  icon,
  title,
  description,
}: FileTypeCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all duration-200 hover:border-blue-500 hover:bg-slate-750 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {description}
      </p>
    </div>
  );
}