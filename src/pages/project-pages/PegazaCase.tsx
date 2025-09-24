import PegazaHero from "../../assets/images/pegaza-hero.png";
import PegazaLanguage from "../../assets/images/pegaza-language.png";
import PegazaMobile from "../../assets/images/pegaza-mobile.png";

export default function PegazaCase() {
  return (
    <section className="prose prose-invert max-w-none flex flex-col gap-16 font-regular">
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Overview</h3>
        <p>
          Pegaza Pagalms is a cultural courtyard in the heart of Liepāja. We
          rebuilt their website from a legacy WordPress install to a
          maintainable Webflow setup, working alongside a designer to refresh
          layout and structure. We also introduced localization so visitors can
          browse content in English, Latvian and Lithuanian.
        </p>
        <img
          className="mx-auto mt-8 max-w-4xl w-full"
          src={PegazaHero}
          alt="Vaulto hero screenshot"
        ></img>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Goals</h3>
        <ul className="list-disc list-inside flex flex-col gap-2 mt-2">
          <li>Migrate from WordPress → Webflow</li>
          <li>Improve performance and editorial workflow</li>
          <li>Enable multilingual content (EN/LV/LT)</li>
          <li>Showcase events, gallery items, and venue info</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">What I Built</h3>
        <ul className="list-disc list-inside flex flex-col gap-2 mt-2">
          <li>Sections for hero, events, gallery, and rentals</li>
          <li>
            Localization architecture (duplicate collections/refs + language
            switch)
          </li>
          <li>Accessible navigation</li>
          <li>Responsive layout tuned for mobile visitors</li>
        </ul>
        <div className="flex mx-auto mt-8 max-w-4xl w-full gap-4 flex-col md:flex-row justify-center items-center md:items-start">
          <img
            className="h-auto w-1/3 object-contain"
            src={PegazaMobile}
            alt="Pegaza mobile layout screenshot"
          ></img>
          <img
            className="h-auto w-2/3 object-contain"
            src={PegazaLanguage}
            alt="Pegaza language selector screenshot"
          ></img>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Highlights</h3>
        <ul className="list-disc list-inside flex flex-col gap-2 mt-2">
          <li>informative, but engaging home page</li>
          <li>English pages such as Gallery and Services</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-2xl">Results</h3>
        <ul className="list-disc list-inside flex flex-col gap-2 mt-2">
          <li>Editor-friendly updates via Webflow CMS</li>
          <li>Clear bilingual navigation</li>
          <li>Simpler maintenance vs. old WP stack</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="font-display font-bold text-2xl">
          Live site:{" "}
          <a
            href="https://www.pegazapagalms.lv/en"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 font-normal"
          >
            pegazapagalms.lv/en
          </a>
        </p>
      </div>
    </section>
  );
}
