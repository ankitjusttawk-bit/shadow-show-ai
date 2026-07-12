import type { Dataset } from "../../types/dataset";

export interface NumericSummary {
  column: string;
  count: number;
  sum: number;
  average: number;
  min: number;
  max: number;
}

export function calculateNumericSummaries(
  dataset: Dataset
): NumericSummary[] {
  return dataset.columns
    .filter(
      (column) =>
        column.type === "number" ||
        column.type === "currency"
    )
    .map((column) => {
      const values = dataset.rows
        .map((row) => Number(row[column.name]))
        .filter((value) => !Number.isNaN(value));

      const count = values.length;
      const sum = values.reduce((acc, value) => acc + value, 0);
      const average = count > 0 ? sum / count : 0;
      const min = count > 0 ? Math.min(...values) : 0;
      const max = count > 0 ? Math.max(...values) : 0;

      return {
        column: column.name,
        count,
        sum,
        average,
        min,
        max,
      };
    });
}