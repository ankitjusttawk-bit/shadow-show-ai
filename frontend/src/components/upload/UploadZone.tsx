import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

type UploadZoneProps = {
  onFileSelect: (file: File) => void;
};

export default function UploadZone({
  onFileSelect,
}: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          ".xlsx",
        ],
        "application/vnd.ms-excel": [".xls"],
        "text/csv": [".csv"],
      },
    });

  return (
    <div
      {...getRootProps()}
      className={`cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition ${
        isDragActive
          ? "border-blue-500 bg-blue-500/10"
          : "border-slate-600 bg-slate-800 hover:border-blue-400"
      }`}
    >
      <input {...getInputProps()} />

      <UploadCloud
        size={56}
        className="mx-auto mb-4 text-blue-400"
      />

      <h2 className="text-2xl font-semibold text-white">
        Drag & Drop your file
      </h2>

      <p className="mt-3 text-slate-400">
        Supports Excel (.xlsx, .xls) and CSV (.csv)
      </p>

      <p className="mt-6 text-sm text-slate-500">
        Click anywhere in this area to browse files.
      </p>
    </div>
  );
}