import { useParams, Link } from "react-router-dom";
import { projectBySlug } from "../data/projects";
import VaultoCase from "./project-pages/VaultoCase"; // example

const customPages: Record<string, React.FC | undefined> = {
  vaulto: VaultoCase,
  // nextcase: NextCasePage,
};

export default function CasePage() {
  const { slug = "" } = useParams();
  const p = projectBySlug[slug];

  if (!p) {
    return (
      <div className="p-8">
        <p>Case not found.</p>
        <Link to="/" className="underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const Custom = customPages[slug];

  return (
    <article className="min-h-screen p-8 font-display">
      <header className="mb-8">
        <h1 className="text-6xl font-bold uppercase">{p.title}</h1>
        {p.summary && <p className="mt-2 text-lg opacity-80">{p.summary}</p>}
        <div className="mt-4 flex gap-4 text-sm opacity-70">
          {p.roles?.length ? <p>Roles: {p.roles.join(", ")}</p> : null}
          {p.tech?.length ? <p>Tech: {p.tech.join(", ")}</p> : null}
        </div>
      </header>

      {/* Hero image / bg */}
      <div
        style={{ ["--bg" as any]: `url(${p.bg})` }}
        className="mb-8 h-72 bg-cover bg-center rounded-lg [background-image:var(--bg)]"
      />

      {/* Custom per-case content */}
      {Custom ? (
        <Custom />
      ) : (
        <p className="opacity-80">Detailed case study coming soon.</p>
      )}

      <footer className="mt-16">
        <Link to="/" className="underline">
          ← Back to Works
        </Link>
      </footer>
    </article>
  );
}
