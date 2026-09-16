import { useParams, Link } from "react-router-dom";
import { prospects } from "../data/mockProspects";

function ProspectDetail() {
  const { id } = useParams();
  const prospect = prospects.find((p) => p.id === Number(id));

  if (!prospect) {
    return <p>Prospect introuvable.</p>;
  }

  return (
    <div>
      <Link to="/prospects" className="text-sm text-brand hover:underline">
        ← Retour à la liste
      </Link>

      <h1 className="text-2xl font-semibold mt-4 mb-1">{prospect.company}</h1>
      <p className="text-ink-soft mb-6">{prospect.sector}</p>

      <div className="bg-white rounded-lg border border-gray-200 p-5 max-w-sm">
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-ink-soft">Score IA</span>
          <span className="font-mono text-gold">{prospect.score}/100</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-ink-soft">Statut</span>
          <span className="text-brand">{prospect.status}</span>
        </div>
      </div>
    </div>
  );
}

export default ProspectDetail;