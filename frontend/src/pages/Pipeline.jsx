import { Link } from "react-router-dom";
import { prospects } from "../data/mockProspects";

const columns = ["A contacter", "Qualifié", "Relance", "Converti"];

function Pipeline() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Pipeline</h1>

      <div className="flex gap-4 overflow-x-auto">
        {columns.map((status) => {
          const items = prospects.filter((p) => p.status === status);

          return (
            <div key={status} className="w-64 shrink-0">
              <h2 className="text-sm font-medium text-ink-soft mb-2">
                {status} ({items.length})
              </h2>

              <div className="space-y-2">
                {items.map((prospect) => (
                  <Link
                    key={prospect.id}
                    to={`/prospects/${prospect.id}`}
                    className="block bg-white rounded-lg border border-gray-200 p-3 hover:border-brand"
                  >
                    <p className="font-medium text-sm">{prospect.company}</p>
                    <p className="text-xs text-ink-soft">{prospect.sector}</p>
                    <span className="font-mono text-xs text-gold">
                      {prospect.score}/100
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pipeline;