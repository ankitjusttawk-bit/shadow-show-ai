export type DataType =
  | "text"
  | "number"
  | "currency"
  | "date"
  | "boolean"
  | "email"
  | "unknown";

export interface DatasetColumn {
  id: string;
  name: string;
  type: DataType;
}

export interface DatasetRow {
  [key: string]: unknown;
}

export interface Dataset {
  id: string;
  name: string;

  columns: DatasetColumn[];

  rows: DatasetRow[];

  createdAt: Date;
}