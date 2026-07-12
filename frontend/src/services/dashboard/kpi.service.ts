import type { Dataset } from "../../types/dataset";

export interface KPIResult {
  title: string;
  value: number | string;
  column: string;
}

export function generateKPIs(dataset: Dataset): KPIResult[] {
  const kpis: KPIResult[] = [];

  dataset.columns.forEach((column) => {
    if (
      column.type === "number" ||
      column.type === "currency"
    ) {
      const values = dataset.rows
        .map((row) => Number(row[column.name]))
        .filter((value) => !Number.isNaN(value));

      if (values.length === 0) return;

      const sum = values.reduce((a, b) => a + b, 0);

      kpis.push({
        title: `Total ${column.name}`,
        value: sum,
        column: column.name,
      });

      kpis.push({
        title: `Average ${column.name}`,
        value: Number((sum / values.length).toFixed(2)),
        column: column.name,
      });

      kpis.push({
        title: `Maximum ${column.name}`,
        value: Math.max(...values),
        column: column.name,
      });

      kpis.push({
        title: `Minimum ${column.name}`,
        value: Math.min(...values),
        column: column.name,
      });
    }
  });

  return kpis;
}