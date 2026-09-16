import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

function Landing() {
  return (
    <div>
     <header className="h-16 bg-navy text-white flex items-center justify-between px-6">
  <span className="font-bold">ProspectAI</span>

  <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
    <Link to="/" className="hover:text-white">Accueil</Link>
    <a href="#fonctionnalites" className="hover:text-white">Fonctionnalités</a>
    <a href="#apropos" className="hover:text-white">À propos</a>
    <a href="#tarifs" className="hover:text-white">Tarifs</a>
    <a href="#faq" className="hover:text-white">FAQ</a>
  </nav>

  <div className="flex items-center gap-3">
    <Link
      to="/app"
      className="text-sm font-medium text-white/90 hover:text-white px-3 py-2"
    >
      Se connecter
    </Link>
    <Link
      to="/app"
      className="bg-brand hover:bg-brand-light text-white text-sm font-medium px-4 py-2 rounded-md"
    >
      Créer un compte
    </Link>
  </div>
</header>

      <section className="bg-navy text-white px-6 py-20">
        <p className="text-xs tracking-wide text-brand-light font-medium mb-3">
          DES PROSPECTS QUALIFIÉS, EN MOINS DE TEMPS
        </p>
        <h1 className="text-4xl font-semibold max-w-xl leading-tight">
          Trouvez et suivez vos meilleurs prospects,{" "}
          <span className="text-brand-light">sans y passer vos journées</span>
        </h1>
        <p className="text-white/70 max-w-lg mt-4">
          ProspectAI identifie, qualifie et priorise vos prospects
          automatiquement, pour que votre équipe commerciale se concentre sur
          ce qui compte : convertir.
        </p>
        <Link
          to="/app"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-medium px-5 py-3 rounded-md mt-8"
        >
          Essayer maintenant <ArrowRight size={16} />
        </Link>
      </section>

      <section className="px-6 py-16 max-w-3xl">
        <p className="text-xs tracking-wide text-brand font-medium mb-2">
          COMMENT ÇA MARCHE
        </p>
        <h2 className="text-2xl font-semibold mb-8">
          Un parcours complet, de la détection à la conversion
        </h2>

        <div className="space-y-6">
          {[
            "Identifier les prospects pertinents selon votre secteur",
            "Qualifier automatiquement leur potentiel avec un score IA",
            "Suivre les relances et ne plus jamais manquer une opportunité",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <Sparkles size={18} className="text-gold mt-1 shrink-0" />
              <p className="text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Landing;