import { useState } from "react";

export default function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick(
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    e.preventDefault(); // prevent navigating if it's an <a>
    try {
      // modern API (https or localhost)
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="underline cursor-pointer underline-offset-2 decoration-2 transition focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
      aria-live="polite"
    >
      {copied ? "Copied!" : email}
    </button>
  );
}
