import type { DetectedColumn } from "../parsers/schemaDetector";

export type ChartType =
  | "line"
  | "bar"
  | "pie"
  | "area"
  | "table"
  | "kpi";

export interface DashboardWidget {
  id: string;
  title: string;
  type: ChartType;
  xField?: string;
  yField?: string;
}

export function generateDashboard(
  columns: DetectedColumn[]
): DashboardWidget[] {
  const widgets: DashboardWidget[] = [];

  const dates = columns.filter(c => c.type === "date");
  const numbers = columns.filter(
    c => c.type === "number" || c.type === "currency"
  );
  const texts = columns.filter(c => c.type === "text");

  // KPI Cards
  numbers.forEach(column => {
    widgets.push({
      id: `kpi-${column.name}`,
      title: `${column.name} KPI`,
      type: "kpi",
      yField: column.name,
    });
  });

  // Time Series
  if (dates.length && numbers.length) {
    widgets.push({
      id: "line-chart",
      title: `${numbers[0].name} Trend`,
      type: "line",
      xField: dates[0].name,
      yField: numbers[0].name,
    });
  }

  // Category Comparison
  if (texts.length && numbers.length) {
    widgets.push({
      id: "bar-chart",
      title: `${numbers[0].name} by ${texts[0].name}`,
      type: "bar",
      xField: texts[0].name,
      yField: numbers[0].name,
    });
  }

  // Distribution
  if (texts.length) {
    widgets.push({
      id: "pie-chart",
      title: `${texts[0].name} Distribution`,
      type: "pie",
      xField: texts[0].name,
    });
  }

  // Raw Data
  widgets.push({
    id: "table",
    title: "Data Table",
    type: "table",
  });

  return widgets;
}