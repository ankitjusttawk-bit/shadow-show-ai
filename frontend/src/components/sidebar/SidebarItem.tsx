import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type SidebarItemProps = {
  title: string;
  to: string;
  icon: ReactNode;
};

export default function SidebarItem({
  title,
  to,
  icon,
}: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      <span>{icon}</span>
      <span>{title}</span>
    </NavLink>
  );
}