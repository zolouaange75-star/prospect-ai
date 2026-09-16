import { Link } from "react-router-dom";
import { prospects } from "../data/mockProspects";
import StatusBadge from "../components/StatusBadge";
function Relances() {
  const aRelancer = prospects
    .filter((p) => p.next_follow_up)
    .sort((a, b) => a.next_follow_up.localeCompare(b.next_follow_up));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Relances</h1>

      <div className="bg-white rounded-lg border border-gray-200">
        {aRelancer.map((prospect) => (
          <Link
            key={prospect.id}
            to={`/prospects/${prospect.id}`}
            className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50"
          >
            <div>
              <p className="font-medium text-ink">{prospect.company}</p>
              <StatusBadge status={prospect.status} />
            </div>
            <span className="font-mono text-sm text-alert">
              {prospect.next_follow_up}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Relances;