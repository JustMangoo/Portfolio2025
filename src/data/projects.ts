// types
export type Project = {
  slug: string; // URL
  title: string;
  bg: string; // background image url
  thumb: string; // thumbnail image url
  summary?: string; // optional blurb for cards
  // put per-case custom fields as needed:
  roles?: string[];
  tech?: string[];
};

// assets
import VaultoBg from "../assets/images/Vaulto-bg.png";
import VaultoMock from "../assets/images/Vaulto-mockup.png";
import PegazaBg from "../assets/images/Pegaza-bg.png";
import PegazaMock from "../assets/images/Pegaza-mockup.png";
import ArtBg from "../assets/images/Art-bg.png";
import ArtMock from "../assets/images/Art-mockup.png";

export const projects: Project[] = [
  {
    slug: "vaulto",
    title: "Vaulto",
    bg: VaultoBg,
    thumb: VaultoMock,
    summary: "Crypto vault UX & responsive Webflow build",
    roles: ["UX", "Web design", "Frontend"],
    tech: ["React", "Tailwind"],
  },
  {
    slug: "pegaza-pagalms",
    title: "Pegaza Pagalms",
    bg: PegazaBg,
    thumb: PegazaMock,
    summary: "Crypto vault UX & responsive Webflow build",
    roles: ["UX", "Web design", "Frontend"],
    tech: ["React", "Tailwind"],
  },
  {
    slug: "Art-is",
    title: "Art'is",
    bg: ArtBg,
    thumb: ArtMock,
    summary: "Crypto vault UX & responsive Webflow build",
    roles: ["UX", "Web design", "Frontend"],
    tech: ["React", "Tailwind"],
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);
