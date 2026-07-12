import type { Dataset } from "../../types/dataset";
import type { DatasetStatistics } from "../../services/dashboard/statistics.service";

type DatasetProfileProps = {
  dataset: Dataset;
  statistics: DatasetStatistics;
};

export default function DatasetProfile({
  dataset,
  statistics,
}: DatasetProfileProps) {
  const cards = [
    { label: "Rows", value: statistics.totalRows },
    { label: "Columns", value: statistics.totalColumns },
    { label: "Numeric", value: statistics.numericColumns },
    { label: "Text", value: statistics.textColumns },
    { label: "Date", value: statistics.dateColumns },
    { label: "Empty Cells", value: statistics.emptyCells },
  ];

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Dataset Profile
        </h2>

        <p className="mt-1 text-slate-400">
          {dataset.name}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-slate-700 bg-slate-900 p-4"
          >
            <p className="text-sm text-slate-400">
              {card.label}
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}