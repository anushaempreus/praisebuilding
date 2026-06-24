import Reveal from "@/components/Reveal";
import Dim from "@/components/Dim";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, HERO_IMG, CTA_IMG } from "@/lib/projects";

const PRINCIPLES: [string, string][] = [
  ["Considered", "A home is the longest project most people ever commission. We build for that horizon — not for the first photograph."],
  ["Honest", "Plain about cost, method and trade-offs. The conversation stays the same from the first quote to the final handover."],
  ["Lasting", "Real materials and patient detailing — made to settle in and age well, rather than date."],
];

const STEPS: [string, string, string][] = [
  ["01", "Consult", "We start with the brief, the site and the budget — and tell you the truth about all three."],
  ["02", "Design", "Drawings, finishes and a fixed scope, resolved before a single trade is booked."],
  ["03", "Build", "One site manager, a tight trade list, weekly updates. No surprises on the invoice."],
  ["04", "Handover", "A finished home, a defects walkthrough, and a builder who answers the phone after."],
];

export const metadata: Metadata = {
  title: "Residential Builders Sydney | Heritage Renovations & Custom Homes",
  description:
    "Praise Building specialises in custom homes, heritage renovations, home extensions and residential construction across Sydney's Eastern Suburbs and Inner West.",

  keywords: [
    "Residential Builders Sydney",
    "Custom Home Builders Sydney",
    "Heritage Renovations Sydney",
    "Home Extensions Sydney",
    "Luxury Home Builders Sydney",
    "Eastern Suburbs Builders",
    "Inner West Builders",
    "Residential Construction Sydney",
  ],

  alternates: {
    canonical: "https://www.praisebuilding.com.au",
  },

  openGraph: {
    title: "Praise Building | Residential Builders Sydney",
    description:
      "Custom homes, heritage renovations and residential construction across Sydney.",
    url: "https://www.praisebuilding.com.au",
    siteName: "Praise Building",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Praise Building Sydney",
      },
    ],
  },
};
export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="hero-img" style={{ backgroundImage: `url('${HERO_IMG}')` }} />
        <div className="hero-veil" />
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div className="eyebrow mono">Residential Builders — Established across Sydney</div>
          <h1>
            {["Homes", "worth", "the"].map((w, i) => (
              <span key={w} className="w" style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
                {w}{" "}
              </span>
            ))}
            <span className="w" style={{ animationDelay: "0.66s" }}>
              <em>praise</em>.
            </span>
          </h1>
          <p className="hero-sub">
            Considered, lasting homes built across Sydney — from restored terraces in the east to bold new
            residences in the inner west. Built with precision. Made to be lived in.
          </p>
          <div className="hero-row">
            <div className="mono">↓ &nbsp;Selected work</div>
            <div className="mono">Est. Sydney · S 33°52′ E 151°12′</div>
          </div>
        </div>
      </header>

      <Dim label="Fig. 001 — Scope of work" />

      {/* INTENT */}
      <section className="intent">
        <Reveal className="head">
          <span className="no mono">001</span>
          <span className="mono">Intent</span>
        </Reveal>
        <Reveal as="p" className="lead">
          A home is the longest project anyone commissions — a year of decisions someone <em>lives inside</em> for decades.
        </Reveal>
        <Reveal as="p" className="body">
          Praise builds for that horizon: deliberate detailing, honest materials, and a build run with the rigour of a
          working drawing. No surprises — on the timeline or the invoice.
        </Reveal>
        <Reveal className="tenets">
          {PRINCIPLES.map(([t, d]) => (
            <div className="tenet" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <Marquee />

      {/* WORK */}
      <section className="work" id="work">
        <Reveal className="head">
          <span className="no mono">002</span>
          <span className="mono">Selected work</span>
        </Reveal>
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
        <Reveal className="all-work">
          <Link href="/work" className="btn ghost">
            All projects →
          </Link>
        </Reveal>
        <Dim label="+ Annandale · Redfern · Greenacre" style={{ marginTop: 30 }} />
      </section>

      {/* PRAISE */}
      <section className="praise" id="praise">
        <Reveal className="inner">
          <div className="mono">003 — Praise</div>
          <blockquote>
            Praise is a high bar to name a building company after. We&rsquo;d rather the <b>homes</b> earn it than the website claim it.
          </blockquote>
          <Link href="/praise" className="praise-link mono">See the work →</Link>
          <Dim dark label="The work, in its own words" style={{ margin: "64px 0 0" }} />
        </Reveal>
      </section>

      {/* CRAFT */}
      <section className="craft" id="craft">
        <Reveal className="head">
          <span className="no mono">004</span>
          <span className="mono">How we build</span>
        </Reveal>
        <Reveal className="steps">
          {STEPS.map(([n, title, body]) => (
            <div className="step" key={n}>
              <span className="n">{n}</span>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cta" id="start">
        <div
          className="cta-bg"
          style={{ backgroundImage: `linear-gradient(rgba(8,42,32,.78),rgba(8,42,32,.78)), url('${CTA_IMG}')` }}
        />
        <Reveal className="cta-inner">
          <div className="mono amber">005 — Start a project</div>
          <h2>
            Tell us what <em>you’re building</em>.
          </h2>
          <div className="row">
            <Link href="/contact" className="btn">
              Start a project →
            </Link>
            <div className="contact">
              Residential builders
              <br />
              Sydney, NSW
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
