import { useParams, Link } from "react-router-dom";
import { projectBySlug } from "../data/projects";
import VaultoCase from "./project-pages/VaultoCase";
import PegazaCase from "./project-pages/PegazaCase";
import ArrowDown from "../assets/icons/Arrow-down.svg";

const customPages: Record<string, React.FC | undefined> = {
  vaulto: VaultoCase,
  pegazapagalms: PegazaCase,
  artis: VaultoCase,
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
    <article className="flex flex-col  min-h-screen p-4 md:p-16 font-display font-medium text-xl">
      <div
        style={{ ["--bg" as any]: `url(${p.bg})` }}
        className="mb-8 h-72 bg-cover bg-center [background-image:var(--bg)]"
      />
      <header className="mb-32 flex flex-col gap-8 justify-center">
        <h1 className="text-9xl font-bold uppercase text-center">{p.title}</h1>
        <div className="mt-4 grid grid-cols-2 gap-y-8 lg:flex gap-4 text-2xl justify-between">
          {p.roles?.length ? (
            <div>
              <div className="flex items-center gap-4 opacity-70">
                <p>Roles</p>
                <img className="h-8" src={ArrowDown} alt="arrow down icon" />
              </div>
              <p>{p.roles.join(", ")}</p>
            </div>
          ) : null}
          {p.tech?.length ? (
            <div>
              <div className="flex items-center gap-4 opacity-70">
                <p>Tech</p>
                <img className="h-8" src={ArrowDown} alt="arrow down icon" />
              </div>
              <p>{p.tech.join(", ")}</p>
            </div>
          ) : null}
          {p.industry ? (
            <div>
              <div className="flex items-center gap-4 opacity-70">
                <p>Industry</p>
                <img className="h-8" src={ArrowDown} alt="arrow down icon" />
              </div>
              <p>{p.industry}</p>
            </div>
          ) : null}
          {p.year ? (
            <div>
              <div className="flex items-center gap-4 opacity-70">
                <p>Tech</p>
                <img className="h-8" src={ArrowDown} alt="arrow down icon" />
              </div>
              <p>{p.year}</p>
            </div>
          ) : null}
        </div>
      </header>

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
