import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold">Shadow Show AI</h1>

        <p className="mb-8 text-gray-600">
          AI Powered Dashboard Generator
        </p>

        <Link
          to="/dashboard"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Open Dashboard
        </Link>
      </div>
    </div>
  );
}