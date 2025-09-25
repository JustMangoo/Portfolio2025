// types
export type Project = {
  slug: string; // URL
  title: string;
  bg: string; // background image url
  thumb: string; // thumbnail image url
  //per-case custom fields as needed:
  roles?: string[];
  tech?: string[];
  industry?: string;
  year?: number;
};

// assets
import VaultoBg from "../assets/images/Vaulto-bg.png";
import VaultoMock from "../assets/images/vaulto-mockup.png";
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
    roles: ["Design", "Frontend", "Backend"],
    tech: ["VueJS", "MongoDB"],
    industry: "Creative Productivity",
    year: 2025,
  },
  {
    slug: "pegazapagalms",
    title: "Pegaza Pagalms",
    bg: PegazaBg,
    thumb: PegazaMock,
    roles: ["Frontend"],
    tech: ["Webflow", "Javascript"],
    industry: "Event Hosting",
    year: 2024,
  },
  {
    slug: "artis",
    title: "Art'is",
    bg: ArtBg,
    thumb: ArtMock,
    roles: ["Frontend", "Backend"],
    tech: ["VueJS", "Laravel"],
    industry: "E-commerce",
    year: 2024,
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);
