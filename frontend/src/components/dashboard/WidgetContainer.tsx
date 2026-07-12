import type { ReactNode } from "react";

type WidgetContainerProps = {
  title: string;
  children: ReactNode;
};

export default function WidgetContainer({
  title,
  children,
}: WidgetContainerProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 shadow-lg">
      <div className="border-b border-slate-700 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}