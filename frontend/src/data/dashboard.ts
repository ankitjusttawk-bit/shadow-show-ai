import type {
  StatCardData,
  UploadRecord,
  ActivityRecord,
  ChartPoint,
} from "../types/dashboard";

export const dashboardStats: StatCardData[] = [
  {
    title: "Files Uploaded",
    value: "248",
    subtitle: "+18 this week",
  },
  {
    title: "Reports Generated",
    value: "132",
    subtitle: "+12 today",
  },
  {
    title: "AI Insights",
    value: "96%",
    subtitle: "Accuracy",
  },
  {
    title: "Storage Used",
    value: "18.4 GB",
    subtitle: "of 100 GB",
  },
];

export const chartData: ChartPoint[] = [
  {
    name: "Jan",
    value: 120,
  },
  {
    name: "Feb",
    value: 180,
  },
  {
    name: "Mar",
    value: 250,
  },
  {
    name: "Apr",
    value: 320,
  },
  {
    name: "May",
    value: 410,
  },
  {
    name: "Jun",
    value: 500,
  },
];

export const recentUploads: UploadRecord[] = [
  {
    id: "1",
    fileName: "Sales_Q1.xlsx",
    fileType: "Excel",
    rows: 12450,
    status: "Completed",
    uploadedAt: "2 min ago",
  },
  {
    id: "2",
    fileName: "Customer_Data.csv",
    fileType: "CSV",
    rows: 8560,
    status: "Processing",
    uploadedAt: "8 min ago",
  },
  {
    id: "3",
    fileName: "Marketing_Report.xlsx",
    fileType: "Excel",
    rows: 6230,
    status: "Completed",
    uploadedAt: "15 min ago",
  },
];

export const recentActivities: ActivityRecord[] = [
  {
    id: "1",
    title: "Excel Uploaded",
    description: "Sales_Q1.xlsx uploaded successfully.",
    timestamp: "2 min ago",
  },
  {
    id: "2",
    title: "Dashboard Generated",
    description: "AI created Power BI dashboard.",
    timestamp: "5 min ago",
  },
  {
    id: "3",
    title: "PDF Export",
    description: "Executive report exported.",
    timestamp: "12 min ago",
  },
];