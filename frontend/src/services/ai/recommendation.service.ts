import type { DetectedColumn } from "../parsers/schemaDetector";

export interface DashboardRecommendation {
  kpis: string[];
  charts: string[];
  insights: string[];
}

export function generateRecommendations(
  columns: DetectedColumn[]
): DashboardRecommendation {
  const recommendations: DashboardRecommendation = {
    kpis: [],
    charts: [],
    insights: [],
  };

  columns.forEach((column) => {
    switch (column.type) {
      case "currency":
        recommendations.kpis.push(column.name);
        recommendations.charts.push("Revenue Trend");
        recommendations.insights.push(
          `${column.name} can be analyzed for revenue growth.`
        );
        break;

      case "number":
        recommendations.kpis.push(column.name);
        recommendations.charts.push("Bar Chart");
        break;

      case "date":
        recommendations.charts.push("Line Chart");
        recommendations.insights.push(
          `Time-series analysis is available for ${column.name}.`
        );
        break;

      case "text":
        recommendations.charts.push("Pie Chart");
        break;

      case "email":
        recommendations.insights.push(
          `${column.name} contains customer identifiers.`
        );
        break;

      default:
        break;
    }
  });

  return recommendations;
}