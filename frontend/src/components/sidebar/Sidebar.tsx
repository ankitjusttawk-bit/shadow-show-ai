import {
  LayoutDashboard,
  Upload,
  BarChart3,
  FileText,
  Settings,
  Sparkles,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      {/* Logo */}
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Shadow Show AI
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          AI Dashboard Builder
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <SidebarItem
          title="Dashboard"
          to="/dashboard"
          icon={<LayoutDashboard size={18} />}
        />

        <SidebarItem
          title="Upload"
          to="/upload"
          icon={<Upload size={18} />}
        />

        <SidebarItem
          title="Analytics"
          to="/analytics"
          icon={<BarChart3 size={18} />}
        />

        <SidebarItem
          title="Reports"
          to="/reports"
          icon={<FileText size={18} />}
        />

        <SidebarItem
          title="AI Insights"
          to="/insights"
          icon={<Sparkles size={18} />}
        />
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-800 p-4">
        <SidebarItem
          title="Settings"
          to="/settings"
          icon={<Settings size={18} />}
        />
      </div>
    </aside>
  );
}