export interface StatCardData {
  title: string;
  value: string;
  subtitle: string;
}

export interface UploadRecord {
  id: string;
  fileName: string;
  fileType: "Excel" | "CSV" | "Google Sheet";
  rows: number;
  status: "Completed" | "Processing" | "Failed";
  uploadedAt: string;
}

export interface ActivityRecord {
  id: string;
  title: string;
  description: string;
  timestamp: string;
}

export interface ChartPoint {
  name: string;
  value: number;
}