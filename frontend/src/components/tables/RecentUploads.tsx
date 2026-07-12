const uploads = [
  {
    file: "Sales_Q1.xlsx",
    type: "Excel",
    rows: 2450,
    status: "Completed",
    uploaded: "2 min ago",
  },
  {
    file: "Finance_Report.csv",
    type: "CSV",
    rows: 1820,
    status: "Completed",
    uploaded: "15 min ago",
  },
  {
    file: "Marketing_Data.xlsx",
    type: "Excel",
    rows: 3260,
    status: "Processing",
    uploaded: "1 hour ago",
  },
];

export default function RecentUploads() {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Uploads
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="pb-3">File</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Rows</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Uploaded</th>
            </tr>
          </thead>

          <tbody>
            {uploads.map((upload) => (
              <tr
                key={upload.file}
                className="border-b border-slate-700 text-slate-300"
              >
                <td className="py-4">{upload.file}</td>
                <td>{upload.type}</td>
                <td>{upload.rows.toLocaleString()}</td>
                <td>
                  <span className="rounded bg-green-600 px-2 py-1 text-xs text-white">
                    {upload.status}
                  </span>
                </td>
                <td>{upload.uploaded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}