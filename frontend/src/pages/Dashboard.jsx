import { prospects, dashboardStats } from "../data/mockProspects";

function StatCard({ value, label, accent }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <p className="text-3xl font-mono" style={{ color: accent }}>
        {value}
      </p>
      <p className="text-sm text-ink-soft mt-1">{label}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Tableau de bord</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard
  value={dashboardStats.totalProspects}
  label="Prospects suivis"
  accent="#3FA772"
/>
<StatCard
  value={dashboardStats.pendingFollowUps}
  label="Relances à faire"
  accent="#E0433D"
/>
<StatCard
  value={dashboardStats.highPriority}
  label="Priorité haute"
  accent="#F0A93A"
/>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        {prospects.map((prospect) => (
          <div
            key={prospect.id}
            className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-0"
          >
            <div>
              <p className="font-medium text-ink">{prospect.company}</p>
              <p className="text-sm text-ink-soft">{prospect.sector}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-gold">{prospect.score}/100</span>
              <span className="text-sm text-brand">{prospect.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;