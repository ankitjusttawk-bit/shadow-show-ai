import type { Dataset } from "../../types/dataset";

type FilePreviewProps = {
  dataset: Dataset;
};

export default function FilePreview({
  dataset,
}: FilePreviewProps) {
  const previewRows = dataset.rows.slice(0, 10);

  if (dataset.rows.length === 0) {
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
        <p className="text-slate-400">
          No data found in this dataset.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Data Preview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Showing first {previewRows.length} of {dataset.rows.length} rows
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-700">
        <table className="min-w-full">
          <thead className="bg-slate-900">
            <tr>
              {dataset.columns.map((column) => (
                <th
                  key={column.id}
                  className="border-b border-slate-700 px-4 py-3 text-left text-sm font-semibold text-white"
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {previewRows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-slate-700 last:border-none hover:bg-slate-700/40"
              >
                {dataset.columns.map((column) => (
                  <td
                    key={column.id}
                    className="px-4 py-3 text-sm text-slate-300"
                  >
                    {String(row[column.name] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}