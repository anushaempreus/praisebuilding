import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Dim from "@/components/Dim";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  return { title: p ? `${p.title} — Praise Building` : "Project — Praise Building" };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  return (
    <main className="case">
      {/* hero */}
      <header className="cs-hero">
        <div className="cs-hero-img" style={{ backgroundImage: `url('${p.cover}')` }} />
        <div className="cs-hero-veil" />
        <div className="cs-hero-inner">
          <div className="mono">{p.suburb} · {p.scope}</div>
          <h1>{p.title}</h1>
        </div>
      </header>

      <Dim label={`Fig. 001 — ${p.scope}`} />

      <section className="cs-body">
        <Reveal className="cs-grid">
          <p className="cs-brief">{p.brief}</p>
          <div className="cs-specs">
            <div><span className="k mono">Suburb</span><span className="v">{p.suburb}</span></div>
            <div><span className="k mono">Scope</span><span className="v">{p.scope}</span></div>
            <div><span className="k mono">Frames</span><span className="v">{p.gallery.length + 1}</span></div>
          </div>
        </Reveal>

        <div className="cs-gallery">
          {p.gallery.map((src, i) => (
            <Reveal className="cs-shot" key={i} delay={i * 80}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src={src} alt={`${p.title} — ${i + 1}`} />
            </Reveal>
          ))}
        </div>

        <Reveal className="cs-back">
          <Link href="/work" className="mono">← All projects</Link>
          <Link href="/contact" className="btn">Start a project →</Link>
        </Reveal>
      </section>
    </main>
  );
}
