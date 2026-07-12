import type { DashboardWidget } from "../../services/dashboard/dashboardGenerator";

import KPIWidget from "./KPIWidget";
import ChartWidget from "./ChartWidget";
import TableWidget from "./TableWidget";

type WidgetRendererProps = {
  widget: DashboardWidget;
  data: Record<string, unknown>[];
};

export default function WidgetRenderer({
  widget,
  data,
}: WidgetRendererProps) {
  switch (widget.type) {
    case "kpi":
      return (
        <KPIWidget
          title={widget.title}
          value="--"
        />
      );

    case "line":
      return (
        <ChartWidget
          title={widget.title}
          type="line"
          data={data}
          xKey={widget.xField ?? ""}
          yKey={widget.yField ?? ""}
        />
      );

    case "bar":
      return (
        <ChartWidget
          title={widget.title}
          type="bar"
          data={data}
          xKey={widget.xField ?? ""}
          yKey={widget.yField ?? ""}
        />
      );

    case "pie":
      return (
        <ChartWidget
          title={widget.title}
          type="pie"
          data={data}
          xKey={widget.xField ?? ""}
          yKey={widget.yField ?? ""}
        />
      );

    case "table":
      return (
        <TableWidget
          title={widget.title}
          data={data}
        />
      );

    default:
      return null;
  }
}