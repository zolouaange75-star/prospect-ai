import { Link } from "react-router-dom";
import { prospects } from "../data/mockProspects";

function Prospects() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Prospects</h1>

      <div className="bg-white rounded-lg border border-gray-200">
        {prospects.map((prospect) => (
          <Link
            key={prospect.id}
            to={`/prospects/${prospect.id}`}
            className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50"
          >
            <div>
              <p className="font-medium text-ink">{prospect.company}</p>
              <p className="text-sm text-ink-soft">{prospect.sector}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-gold">{prospect.score}/100</span>
              <span className="text-sm text-brand">{prospect.status}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Prospects;