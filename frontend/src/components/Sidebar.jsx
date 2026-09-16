import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GitBranch,
  BellRing,
  Sparkles,
} from "lucide-react";

const links = [
  { to: "/", label: "Tableau de bord", icon: LayoutDashboard },
  { to: "/prospects", label: "Prospects", icon: Users },
  { to: "/pipeline", label: "Pipeline", icon: GitBranch },
  { to: "/relances", label: "Relances", icon: BellRing },
  { to: "/assistant", label: "Assistant IA", icon: Sparkles },
];

function Sidebar() {
  return (
    <aside className="w-60 bg-cockpit text-white h-screen p-4">
      <h2 className="text-lg font-bold mb-6 px-2">ProspectAI</h2>
      <nav className="space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-cockpit-light text-white"
                  : "text-white/70 hover:bg-cockpit-light hover:text-white"
              }`
            }
          >
            <Icon size={17} strokeWidth={1.8} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;