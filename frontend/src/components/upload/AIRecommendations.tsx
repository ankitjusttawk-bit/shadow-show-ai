import type { DashboardRecommendation } from "../../services/ai/recommendation.service";

type AIRecommendationsProps = {
  recommendations: DashboardRecommendation;
};

export default function AIRecommendations({
  recommendations,
}: AIRecommendationsProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        🤖 AI Recommendations
      </h2>

      {/* KPI Suggestions */}
      <section className="mb-8">
        <h3 className="mb-3 text-lg font-semibold text-blue-400">
          Suggested KPIs
        </h3>

        <div className="flex flex-wrap gap-2">
          {recommendations.kpis.length > 0 ? (
            recommendations.kpis.map((kpi) => (
              <span
                key={kpi}
                className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300"
              >
                {kpi}
              </span>
            ))
          ) : (
            <p className="text-slate-400">
              No KPI suggestions found.
            </p>
          )}
        </div>
      </section>

      {/* Chart Suggestions */}
      <section className="mb-8">
        <h3 className="mb-3 text-lg font-semibold text-green-400">
          Suggested Charts
        </h3>

        <div className="flex flex-wrap gap-2">
          {recommendations.charts.length > 0 ? (
            recommendations.charts.map((chart) => (
              <span
                key={chart}
                className="rounded-full bg-green-600/20 px-3 py-1 text-sm text-green-300"
              >
                {chart}
              </span>
            ))
          ) : (
            <p className="text-slate-400">
              No chart suggestions found.
            </p>
          )}
        </div>
      </section>

      {/* AI Insights */}
      <section>
        <h3 className="mb-3 text-lg font-semibold text-purple-400">
          AI Insights
        </h3>

        {recommendations.insights.length > 0 ? (
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            {recommendations.insights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400">
            No insights generated.
          </p>
        )}
      </section>
    </div>
  );
}