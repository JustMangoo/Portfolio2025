import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import ArrowUp from "../assets/icons/Arrow-up.svg";
import Chevron from "../assets/icons/Chevron.svg";

export default function WorkCard({ p }: { p: Project }) {
  return (
    <div
      style={{ ["--bg" as any]: `url(${p.bg})` }}
      className="relative flex flex-col gap-6 p-8 min-h-[420px] bg-cover bg-center [background-image:var(--bg)]"
    >
      <div className="flex items-center font-display text-4xl font-bold">
        <img src={Chevron} alt="Chevron" className="h-8 w-auto" />
        <h3>{p.title}</h3>
      </div>

      <img
        className="h-100 w-auto self-center"
        src={p.thumb}
        alt={`${p.title} thumbnail`}
      />

      <div className="flex justify-end">
        <div className="corner-frame-left corner-frame-left-hover p-2.5 flex w-fit">
          <Link
            to={`/cases/${p.slug}`}
            className="bg-primary px-5 py-3 text-2xl font-semibold text-secondary inline-flex items-center gap-2"
          >
            View case
            <img className="h-9 w-auto" src={ArrowUp} alt="arrow up right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
