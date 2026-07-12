import * as XLSX from "xlsx";
import type { Dataset, DatasetColumn } from "../../types/dataset";

export async function parseExcelFile(
  file: File
): Promise<Dataset> {
  const buffer = await file.arrayBuffer();

  const workbook = XLSX.read(buffer, {
    type: "array",
  });

  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    throw new Error("Workbook contains no sheets.");
  }

  const worksheet = workbook.Sheets[firstSheetName];

  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(
    worksheet,
    {
      defval: "",
    }
  );

  const columns: DatasetColumn[] =
    rows.length > 0
      ? Object.keys(rows[0]).map((column) => ({
          id: column,
          name: column,
          type: "unknown",
        }))
      : [];

  return {
    id: crypto.randomUUID(),
    name: file.name,
    columns,
    rows,
    createdAt: new Date(),
  };
}