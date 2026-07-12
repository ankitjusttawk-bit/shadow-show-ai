import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export default function Card({
  children,
  title,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-sm",
        className
      )}
    >
      {title && (
        <h2 className="mb-6 text-xl font-semibold text-white">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}