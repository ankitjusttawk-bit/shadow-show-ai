import type { Dataset } from "../../types/dataset";

export interface DatasetStatistics {
  totalRows: number;
  totalColumns: number;

  numericColumns: number;
  textColumns: number;
  dateColumns: number;
  unknownColumns: number;

  emptyCells: number;
}

export function calculateStatistics(
  dataset: Dataset
): DatasetStatistics {
  let numericColumns = 0;
  let textColumns = 0;
  let dateColumns = 0;
  let unknownColumns = 0;

  dataset.columns.forEach((column) => {
    switch (column.type) {
      case "number":
      case "currency":
        numericColumns++;
        break;

      case "date":
        dateColumns++;
        break;

      case "text":
        textColumns++;
        break;

      default:
        unknownColumns++;
    }
  });

  let emptyCells = 0;

  dataset.rows.forEach((row) => {
    Object.values(row).forEach((value) => {
      if (
        value === null ||
        value === undefined ||
        value === ""
      ) {
        emptyCells++;
      }
    });
  });

  return {
    totalRows: dataset.rows.length,
    totalColumns: dataset.columns.length,

    numericColumns,
    textColumns,
    dateColumns,
    unknownColumns,

    emptyCells,
  };
}