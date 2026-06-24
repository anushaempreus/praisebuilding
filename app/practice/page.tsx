import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Dim from "@/components/Dim";
import { projects, SUBURBS } from "@/lib/projects";

export const metadata: Metadata = { title: "Practice — Praise Building" };

// Honest, derived from the real catalogue — not invented.
const disciplines = Array.from(new Set(projects.map((p) => p.scope)));
const bandImg = projects.find((p) => p.slug === "paddington")?.cover ?? projects[0].cover;

export default function Practice() {
  return (
    <main className="subpage">
      <section className="practice">
        <Reveal className="pagehead">
          <div className="mono no">006 — The practice</div>
          <h1>A small builder, deliberately.</h1>
        </Reveal>

        <div className="practice-intro">
          <div className="pi-text">
            <Reveal as="p" className="lead">
              Praise stays small on purpose — one team, a handful of homes at a time, so the person who
              quotes your job is the person who sees it through.
            </Reveal>
            <Reveal as="p" className="body">
              We work across Sydney, from heritage restorations to new residences. The thread through all
              of it is the same: honest materials, careful detailing, and a build you can actually follow.
            </Reveal>
          </div>
          <Reveal className="pi-img">
            <div style={{ backgroundImage: `url('${bandImg}')` }} />
          </Reveal>
        </div>

        <div className="practice-cols">
          <Reveal className="pcol">
            <span className="mono no">What we take on</span>
            <ul>
              {disciplines.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="pcol" delay={80}>
            <span className="mono no">Where we build</span>
            <ul>
              {SUBURBS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Dim label="The work speaks to the rest" style={{ margin: "8px 0 36px" }} />
        <Reveal className="gallery-foot">
          <p>Have a home in mind?</p>
          <Link href="/contact" className="btn">
            Start a project →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
