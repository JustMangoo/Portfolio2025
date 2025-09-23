import Chevron from "../assets/icons/Chevron.svg";
import ProfileImage from "../assets/images/profile-image.png";
import { projects } from "../data/projects";
import WorkCard from "../components/WorkCard";

import { useEffect, useState } from "react";

function useClock() {
  const format = (d: Date) =>
    d.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Europe/Copenhagen",
    });

  const [time, setTime] = useState(format(new Date()));

  useEffect(() => {
    const msToNextMinute = 60000 - (Date.now() % 60000);
    const timeout = setTimeout(() => {
      setTime(format(new Date()));
      const interval = setInterval(() => setTime(format(new Date())), 60000);
      (window as any).__clockInterval = interval;
    }, msToNextMinute);

    return () => {
      clearTimeout(timeout);
      clearInterval((window as any).__clockInterval);
    };
  }, []);

  return time;
}

const skillItems = [
  {
    category: "Web Design",
    skills: ["Figma", "Responsive", "Prototypes", "Wireframes"],
  },
  {
    category: "Front-End",
    skills: ["CSS", "Html", "JavaScript", "VueJS", "React", "Tailwind"],
  },
  {
    category: "Back-End",
    skills: ["MongoDB", "Node.jS", "Laravel", "SQL"],
  },
];

export default function Home() {
  const time = useClock();
  const [year] = useState<number>(() => new Date().getFullYear());
  return (
    <>
      <section
        id="hero"
        className="h-screen font-display font-bold uppercase flex flex-col justify-between p-16"
      >
        <header>
          <h1 className="m-0 leading-[0.8]">
            <span className="block text-8xl">Aleksis</span>
            <span className="block text-7xl -mt-2 md:-mt-3">Daugats</span>
          </h1>
        </header>

        <footer className="flex justify-between items-end">
          <div>
            <p className="m-0">[ {time} ]</p>
            <p className="m-0">Aarhus, Denmark</p>
          </div>

          <h2 className="m-0 leading-[0.8] text-right">
            <span className="block text-8xl">Web</span>
            <span className="block text-7xl -mt-2 md:-mt-3">Designer</span>
          </h2>
        </footer>
      </section>
      <section
        id="about"
        className="py-32 px-2 sm:px-8 lg:px-16 flex justify-center items-center gap-2"
      >
        <img src={ProfileImage} alt="Profile Image" className="h-64" />
        <div className=" text-xl flex flex-col max-w-2xl gap-5">
          <div className="flex items-center font-bold">
            <img src={Chevron} alt="Chevron" className="h-5 w-auto" />
            <h3 className="font-display">Hi! I’m Aleksis Daugats </h3>
          </div>
          <p className="font-semibold ml-5">
            A Web Designer & Developer with a knack for blending sleek visuals
            and seamless functionality. I craft user-friendly websites that
            don’t just look stunning, but also work smart. From Webflow wizardry
            to modern development tools, I bring ideas to life with style,
            precision, and a touch of digital magic.
          </p>
        </div>
      </section>
      <section
        id="works"
        className="flex flex-col justify-center items-center py-16"
      >
        <header>
          <h2 className="text-9xl font-display font-bold text-primary uppercase">
            Works
          </h2>
        </header>

        <div className="w-full ">
          {projects.map((p) => (
            <WorkCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
      <section
        id="skills"
        className=" flex flex-col p-8 lg:p-16 justify-center items-center  w-full"
      >
        <header>
          <h2 className="text-9xl font-display font-bold text-primary uppercase">
            Skills
          </h2>
        </header>
        <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-16">
          {skillItems.map((item) => (
            <div
              key={item.category}
              className="flex flex-col h-fit gap-5 flex-1 p-2.5 corner-frame corner-frame-hover"
            >
              <div className="flex items-center font-display text-3xl font-bold">
                <img src={Chevron} alt="Chevron" className="h-7 w-auto" />
                <h3>{item.category}</h3>
              </div>
              <ul className="flex flex-col gap-5 ">
                {item.skills.map((skill) => (
                  <li className="text-3xl font-semibold justify-center items-center flex self-stretch border-4 border-primary">
                    <p>{skill}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <footer
        id="connect"
        className="font-display flex flex-col gap-32 p-16 pt-32"
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="corner-frame-top corner-frame-top-hover border-primary p-2.5 pb-0 flex w-fit justify-center">
            <a
              href="mailto:daugatsa@gmail.com"
              target="_blank"
              className="bg-primary px-5 py-3 text-4xl cursor-pointer font-semibold text-secondary"
            >
              Click to Connect
            </a>
          </div>
          <ul className="font-regular font-semibold flex gap-2 w-fit">
            <li className="flex gap-1 group">
              <p className="group-hover:translate-x-0.5 ease-in-out duration-150">
                [
              </p>
              <a
                href="https://www.linkedin.com/in/aleksis-daugats/"
                target="_blank"
              >
                LinkedIn
              </a>
              <p className="group-hover:-translate-x-0.5 ease-in-out duration-150">
                ]
              </p>
            </li>

            <li className="flex gap-1 group">
              <p className="group-hover:translate-x-0.5 ease-in-out duration-150">
                [
              </p>
              <a href="https://github.com/JustMangoo" target="_blank">
                GitHub
              </a>
              <p className="group-hover:-translate-x-0.5 ease-in-out duration-150">
                ]
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-between font-semibold">
          <div>
            <p>Site by Aleksis</p> <p>@{year}</p>
          </div>
          <div className="text-right">
            <p className="m-0">[ {time} ]</p>
            <p className="m-0">Aarhus, Denmark</p>
          </div>
        </div>
      </footer>
    </>
  );
}
