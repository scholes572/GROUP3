import { Link } from "react-router";
import { Home, AlertTriangle } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle className="w-24 h-24 text-amber-500 mx-auto mb-6" />
        <h1 className="text-6xl font-bold mb-4 text-amber-500">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Looks like this page went off the grid. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 rounded-lg font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/50"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
