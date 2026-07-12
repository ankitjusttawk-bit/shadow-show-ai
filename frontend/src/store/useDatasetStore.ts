import { create } from "zustand";

import type { Dataset } from "../types/dataset";
import type { DatasetStatistics } from "../services/dashboard/statistics.service";

interface DatasetStore {
  dataset: Dataset | null;
  statistics: DatasetStatistics | null;

  setDataset: (dataset: Dataset) => void;
  setStatistics: (statistics: DatasetStatistics) => void;

  clear: () => void;
}

export const useDatasetStore = create<DatasetStore>((set) => ({
  dataset: null,

  statistics: null,

  setDataset: (dataset) =>
    set({
      dataset,
    }),

  setStatistics: (statistics) =>
    set({
      statistics,
    }),

  clear: () =>
    set({
      dataset: null,
      statistics: null,
    }),
}));