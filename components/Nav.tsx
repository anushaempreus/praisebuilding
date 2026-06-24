"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS: [string, string][] = [
  ["/work", "Work"],
  ["/craft", "Craft"],
  ["/praise", "Praise"],
  ["/practice", "Practice"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`${scrolled ? "scrolled" : ""}${open ? " open" : ""}`}>
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        PRAISE<b>BUILDING · SYDNEY</b>
      </Link>

      <div className="nav-links">
        {LINKS.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta">
          Start a project
        </Link>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <div className={`nav-mobile${open ? " show" : ""}`} aria-hidden={!open}>
        <div className="nav-mobile-inner">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Start a project →
          </Link>
        </div>
      </div>
    </nav>
  );
}
