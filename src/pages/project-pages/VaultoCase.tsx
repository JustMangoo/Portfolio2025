import VaultoRoadmap from "../../assets/images/Vaulto-roadmap.png";
import VaultoHero from "../../assets/images/vaulto-hero.png";
import VaultoAssets from "../../assets/images/vaulto-assets.png";

export default function VaultoCase() {
  return (
    <section className="prose prose-invert max-w-none flex flex-col gap-16 font-regular">
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Overview</h3>
        <p>
          Vaulto is a web application concept designed for creatives to collect,
          organize, and revisit inspiration. Think of it as a personal “vault”
          for ideas — combining the structure of productivity tools with the
          playfulness and fluidity needed by designers, artists, and makers. At
          this stage, the project includes a public landing page that introduces
          the product vision, highlights features, and sets the foundation for
          onboarding future users.
        </p>
        <img
          className="mx-auto mt-8 max-w-4xl w-full"
          src={VaultoHero}
          alt="Vaulto hero screenshot"
        ></img>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Problem</h3>
        <p>
          Creative people often juggle inspiration from many sources —
          screenshots, links, sketches, and notes. Traditional note-taking or
          file storage tools feel rigid and uninspiring. The challenge was to
          design a platform that feels:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-2 mt-2 opacity-80">
          <li>Organized but playful</li>
          <li>Minimal but expressive</li>
          <li>Tailored for creative workflows</li>
        </ul>
        <div className="image-placeholder">[Feature section screenshot]</div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Goals</h3>
        <ol className="list-decimal list-inside flex flex-col gap-2">
          <li>
            Craft a modern, approachable brand identity (logo, typography, color
            system).
          </li>
          <li>
            Design a landing page that clearly explains Vaulto’s purpose while
            staying visually engaging.
          </li>
          <li>
            Set up a scalable Vue + Node.js MEVN stack to support future
            authenticated features.
          </li>
          <li>
            Plan for a <strong>browser extension</strong> that enables instant
            saving of links, images, and inspiration while browsing.
          </li>
        </ol>
        <img
          className="mx-auto mt-8 max-w-4xl w-full"
          src={VaultoAssets}
          alt="Vaulto raodmap screenshot"
        ></img>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Solution</h3>
        <p>
          The current solution focuses on a strong landing page foundation. It
          introduces Vaulto with bold headlines, feature teasers, and a roadmap
          hinting at collaboration and extensions. The visual style balances a
          secure, playful feel and accessible layouts.
        </p>
        <img
          className="mx-auto mt-8 max-w-4xl w-full"
          src={VaultoRoadmap}
          alt="Vaulto raodmap screenshot"
        ></img>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Summary</h3>
        <p>
          Vaulto is an early-stage exploration into how creatives can save and
          shape their inspirations. Even with just the landing page, it
          demonstrates strong visual identity, thoughtful problem framing, and a
          scalable technical setup.
        </p>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="font-display font-bold text-2xl">
          GItHub:{" "}
          <a
            href="https://github.com/JustMangoo/Vaulto"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 font-normal"
          >
            github.com/JustMangoo/Vaulto
          </a>
        </p>
      </div>
    </section>
  );
}
