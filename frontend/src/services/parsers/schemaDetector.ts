export type ColumnType =
  | "text"
  | "number"
  | "currency"
  | "date"
  | "boolean"
  | "email"
  | "unknown";

export interface DetectedColumn {
  name: string;
  type: ColumnType;
  sample: unknown;
}

export function detectSchema(
  rows: Record<string, unknown>[]
): DetectedColumn[] {
  if (rows.length === 0) return [];

  const firstRow = rows[0];

  return Object.keys(firstRow).map((column) => {
    const value = firstRow[column];

    return {
      name: column,
      type: detectValueType(value),
      sample: value,
    };
  });
}

function detectValueType(value: unknown): ColumnType {
  if (value === null || value === undefined || value === "") {
    return "unknown";
  }

  if (typeof value === "boolean") {
    return "boolean";
  }

  if (typeof value === "number") {
    return "number";
  }

  const text = String(value).trim();

  if (!Number.isNaN(Number(text))) {
    return "number";
  }

  if (
    /^\$|₹|€|£/.test(text) ||
    /USD|INR|EUR|GBP/i.test(text)
  ) {
    return "currency";
  }

  if (!Number.isNaN(Date.parse(text))) {
    return "date";
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
    return "email";
  }

  return "text";
}