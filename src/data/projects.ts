// types
export type Project = {
  slug: string; // URL, e.g. "vaulto"
  title: string; // "Vaulto"
  bg: string; // background image url (imported)
  thumb: string; // thumbnail image url (imported)
  summary?: string; // optional blurb for cards
  // put per-case custom fields as needed:
  roles?: string[];
  tech?: string[];
};

// assets
import VaultoBg from "../assets/images/Vaulto-bg.png";
import VaultoMock from "../assets/images/Vaulto-mockup.png";
// import NextBg from "..."; import NextMock from "...";

export const projects: Project[] = [
  {
    slug: "vaulto",
    title: "Vaulto",
    bg: VaultoBg,
    thumb: VaultoMock,
    summary: "Secure finance dashboard UI.",
  },
  {
    slug: "pegaza-pagalms",
    title: "Pegaza Pagalms",
    bg: VaultoBg,
    thumb: VaultoMock,
    summary: "Secure finance dashboard UI.",
  },
  {
    slug: "Art-is",
    title: "ArtU+2019is",
    bg: VaultoBg,
    thumb: VaultoMock,
    summary: "Secure finance dashboard UI.",
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);
