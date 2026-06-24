import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Dim from "@/components/Dim";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Craft — Praise Building" };

const STEPS: [string, string, string][] = [
  ["01", "Consult", "We start with the brief, the site and the budget — and tell you the truth about all three before anything is promised."],
  ["02", "Design", "Drawings, finishes and a fixed scope, resolved on paper before a single trade is booked."],
  ["03", "Build", "One site manager, a tight list of trusted trades, and weekly updates. No surprises on the invoice."],
  ["04", "Handover", "A finished home, a thorough defects walkthrough, and a builder who answers the phone long after."],
];

const bandImg = projects.find((p) => p.slug === "hunters-hill")?.gallery[1] ?? projects[0].cover;

export default function Craft() {
  return (
    <main className="subpage">
      <section className="craft">
        <Reveal className="pagehead">
          <div className="mono no">004 — How we build</div>
          <h1>Run with the rigour of a working drawing.</h1>
        </Reveal>

        <div className="practice-intro">
          <div className="pi-text">
            <Reveal as="p" className="lead">
              Every Praise build follows the same four stages. The detail changes with the home; the
              discipline does not.
            </Reveal>
            <Reveal as="p" className="body">
              Nothing important is improvised on site. The decisions get made on paper — drawings,
              finishes, a resolved scope — so the build itself is mostly a matter of following the plan
              with care. It keeps the timeline legible and the cost honest.
            </Reveal>
          </div>
          <Reveal className="pi-img">
            <div style={{ backgroundImage: `url('${bandImg}')` }} />
          </Reveal>
        </div>

        <Reveal className="craft-steps">
          {STEPS.map(([n, title, body]) => (
            <div className="craft-step" key={n}>
              <span className="cs-n mono">{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </Reveal>

        <Dim label="From first drawing to final walkthrough" style={{ margin: "8px 0 36px" }} />
        <Reveal className="gallery-foot">
          <p>Ready to start the drawings?</p>
          <Link href="/contact" className="btn">
            Start a project →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
