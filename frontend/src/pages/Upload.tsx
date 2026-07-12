import { useState } from "react";

import UploadZone from "../components/upload/UploadZone";
import FilePreview from "../components/upload/FilePreview";
import DatasetProfile from "../components/upload/DatasetProfile";
import AIRecommendations from "../components/upload/AIRecommendations";

import { parseExcelFile } from "../services/parsers/excel.parser";
import { detectSchema } from "../services/parsers/schemaDetector";
import { generateRecommendations } from "../services/ai/recommendation.service";
import type { DashboardRecommendation } from "../services/ai/recommendation.service";
import { calculateStatistics } from "../services/dashboard/statistics.service";

import { useDatasetStore } from "../store/useDatasetStore";

export default function Upload() {
  const [loading, setLoading] = useState(false);

  const [recommendations, setRecommendations] =
    useState<DashboardRecommendation | null>(null);

  const {
    dataset,
    statistics,
    setDataset,
    setStatistics,
  } = useDatasetStore();

  async function handleFileSelect(file: File) {
    try {
      setLoading(true);

      const parsedDataset = await parseExcelFile(file);

      setDataset(parsedDataset);

      const stats = calculateStatistics(parsedDataset);

      setStatistics(stats);

      const detectedColumns = detectSchema(parsedDataset.rows);

      const ai = generateRecommendations(detectedColumns);

      setRecommendations(ai);
    } catch (error) {
      console.error(error);
      alert("Unable to parse the selected file.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Universal Import Center
        </h1>

        <p className="mt-2 text-slate-400">
          Upload Excel, CSV, PDF, Word, JSON and more.
        </p>
      </div>

      <UploadZone onFileSelect={handleFileSelect} />

      {loading && (
        <div className="rounded-xl border border-blue-500 bg-blue-500/10 p-4 text-blue-300">
          Processing file...
        </div>
      )}

      {dataset && statistics && (
        <DatasetProfile
          dataset={dataset}
          statistics={statistics}
        />
      )}

      {dataset && (
        <FilePreview dataset={dataset} />
      )}

      {recommendations && (
        <AIRecommendations
          recommendations={recommendations}
        />
      )}
    </div>
  );
}