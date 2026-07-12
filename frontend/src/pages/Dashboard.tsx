import {
  Upload,
  Sparkles,
  FileText,
  BarChart3,
} from "lucide-react";

import StatCard from "../components/cards/StatCard";
import LineChart from "../components/charts/LineChart";
import RecentUploads from "../components/tables/RecentUploads";
import Card from "../components/common/Card";

import {
  dashboardStats,
  chartData,
} from "../data/dashboard";

const icons = [
  <Upload size={24} />,
  <Sparkles size={24} />,
  <FileText size={24} />,
  <BarChart3 size={24} />,
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Shadow Show AI
        </h1>

        <p className="mt-2 text-slate-400">
          AI Powered Dashboard Builder
        </p>
      </div>

      {/* KPI Cards */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={icons[index]}
          />
        ))}
      </section>

      {/* Analytics + Activity */}
      <section className="grid gap-6 xl:grid-cols-2">
        <Card title="Upload Analytics">
          <LineChart data={chartData} />
        </Card>

        <Card title="Recent Activity">
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-700 p-4">
              <p className="font-medium text-white">
                📁 Uploaded Sales_Q1.xlsx
              </p>
              <p className="text-sm text-slate-400">
                2 min ago
              </p>
            </div>

            <div className="rounded-lg bg-slate-700 p-4">
              <p className="font-medium text-white">
                🤖 AI generated dashboard
              </p>
              <p className="text-sm text-slate-400">
                5 min ago
              </p>
            </div>

            <div className="rounded-lg bg-slate-700 p-4">
              <p className="font-medium text-white">
                📄 PDF report exported
              </p>
              <p className="text-sm text-slate-400">
                15 min ago
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Recent Uploads */}
      <RecentUploads />
    </div>
  );
}