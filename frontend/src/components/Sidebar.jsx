import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-60 bg-cockpit text-white h-screen p-4">
      <h2 className="text-lg font-bold mb-6">ProspectAI</h2>
      <nav>
        <Link to="/" className="block py-2 hover:text-gold">
          Tableau de bord
        </Link>
        <Link to="/prospects" className="block py-2 hover:text-gold">
          Prospects
        </Link>
        <Link to="/pipeline" className="block py-2 hover:text-gold">
          Pipeline
        </Link>
        <Link to="/relances" className="block py-2 hover:text-gold">
          Relances
        </Link>
        <Link to="/assistant" className="block py-2 hover:text-gold">
          Assistant IA
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;