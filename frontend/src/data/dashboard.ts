import type {
  ActivityRecord,
  ChartPoint,
  StatCardData,
  UploadRecord,
} from "../types/dashboard";

export const dashboardStats: StatCardData[] = [
  {
    title: "Files Uploaded",
    value: "1,245",
    subtitle: "+12% this month",
  },
  {
    title: "AI Insights",
    value: "378",
    subtitle: "Generated automatically",
  },
  {
    title: "Reports",
    value: "96",
    subtitle: "PDF & PPT Exports",
  },
  {
    title: "Dashboards",
    value: "42",
    subtitle: "Active dashboards",
  },
];

export const chartData: ChartPoint[] = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 180 },
  { label: "Mar", value: 240 },
  { label: "Apr", value: 210 },
  { label: "May", value: 320 },
  { label: "Jun", value: 410 },
];

export const recentUploads: UploadRecord[] = [
  {
    id: "1",
    fileName: "Sales_Q1.xlsx",
    fileType: "Excel",
    rows: 2450,
    status: "Completed",
    uploadedAt: "2 min ago",
  },
  {
    id: "2",
    fileName: "Finance_Report.csv",
    fileType: "CSV",
    rows: 1820,
    status: "Completed",
    uploadedAt: "15 min ago",
  },
  {
    id: "3",
    fileName: "Marketing_Data.xlsx",
    fileType: "Excel",
    rows: 3260,
    status: "Processing",
    uploadedAt: "1 hour ago",
  },
];

export const recentActivities: ActivityRecord[] = [
  {
    id: "1",
    title: "Uploaded Sales_Q1.xlsx",
    description: "Excel file imported successfully.",
    timestamp: "2 min ago",
  },
  {
    id: "2",
    title: "Dashboard Generated",
    description: "AI created a sales dashboard.",
    timestamp: "5 min ago",
  },
  {
    id: "3",
    title: "PDF Exported",
    description: "Monthly report exported.",
    timestamp: "15 min ago",
  },
];