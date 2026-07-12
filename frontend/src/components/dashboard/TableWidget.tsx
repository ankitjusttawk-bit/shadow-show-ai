import WidgetContainer from "./WidgetContainer";

type TableWidgetProps = {
  title: string;
  data: Record<string, unknown>[];
};

export default function TableWidget({
  title,
  data,
}: TableWidgetProps) {
  if (data.length === 0) {
    return (
      <WidgetContainer title={title}>
        <p className="text-slate-400">
          No data available.
        </p>
      </WidgetContainer>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <WidgetContainer title={title}>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-700">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-4 py-3 text-left text-sm font-semibold text-white"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.slice(0, 20).map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-slate-700 hover:bg-slate-700/40"
              >
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-4 py-3 text-sm text-slate-300"
                  >
                    {String(row[column] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Showing {Math.min(data.length, 20)} of {data.length} rows
      </p>
    </WidgetContainer>
  );
}