import type { Dataset } from "../../types/dataset";

export interface ColumnProfile {
  column: string;
  totalValues: number;
  emptyValues: number;
  uniqueValues: number;
  sampleValues: unknown[];
}

export interface DatasetProfile {
  columns: ColumnProfile[];
}

export function profileDataset(
  dataset: Dataset
): DatasetProfile {
  const profiles: ColumnProfile[] = dataset.columns.map((column) => {
    const values = dataset.rows.map((row) => row[column.name]);

    const emptyValues = values.filter(
      (value) =>
        value === null ||
        value === undefined ||
        value === ""
    ).length;

    const uniqueValues = new Set(values).size;

    return {
      column: column.name,
      totalValues: values.length,
      emptyValues,
      uniqueValues,
      sampleValues: values.slice(0, 5),
    };
  });

  return {
    columns: profiles,
  };
}