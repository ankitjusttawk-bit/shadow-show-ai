import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",

    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white border border-slate-700",

    outline:
      "bg-transparent border border-slate-600 text-slate-200 hover:bg-slate-800",

    danger:
      "bg-red-600 hover:bg-red-700 text-white border border-red-600",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}