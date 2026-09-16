const statusColors = {
  "A contacter": "bg-gray-100 text-gray-700",
  "Qualifié": "bg-blue-100 text-blue-700",
  "Relance": "bg-amber-100 text-amber-700",
  "Converti": "bg-green-100 text-green-700",
};

function StatusBadge({ status }) {
  const colorClasses = statusColors[status] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={`text-xs font-medium px-2.5 py-1 rounded-full ${colorClasses}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;