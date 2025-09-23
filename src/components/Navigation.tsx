import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavMarker } from "./NavMarker.tsx";
import { useState } from "react";
import EmailCopy from "./EmailCopy.tsx";

const navItems = [
  { to: "#works", label: "Works" },
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#connect", label: "Connect" },
];

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      // Go to home with hash; Home will do the scrolling
      navigate(`/${hash}`);
    } else {
      // Already on home, scroll now
      scrollToHash(hash);
      // keep URL in sync
      history.pushState({}, "", hash);
    }
  };
  return (
    <nav className="absolute z-10 top-16 right-16 bg-primary text-secondary font-display font-bold text-base inline-flex flex-col gap-2">
      <div className="flex items-center justify-between pointer">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="main-menu"
          className="p-1 hover:bg-secondary/10 z-11 cursor-pointer"
        >
          <svg
            viewBox="0 -960 960 960"
            className={[
              "h-8 w-8 fill-current transition-transform duration-200",
              open ? "rotate-45" : "",
            ].join(" ")}
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>

      {/* Popover panel */}
      <div
        id="main-menu"
        className={[
          "absolute right-0 top-0 w-60 bg-primary shadow-lg ring-1 ring-secondary/20",
          "transition-all duration-200 origin-top-right",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <ul className="p-4 flex flex-col gap-2 uppercase">
          {navItems.map((item) => (
            <li key={item.to} className="group flex items-center gap-2">
              <NavMarker />
              <Link
                to={item.to}
                onClick={handleClick(item.to)}
                className="relative inline-block
    no-underline
    after:content-[''] after:absolute after:left-0 after:-bottom-0.5
    after:h-[2px] after:w-full after:bg-current
    after:origin-left after:-translate-y-1 after:scale-x-0
    after:transition-transform after:duration-200
    group-hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <EmailCopy email="Daugatsa@gmail.com" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
