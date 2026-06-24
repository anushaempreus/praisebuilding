import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Dim from "@/components/Dim";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Praise — Praise Building" };

// The gallery is built from the real project photography — interleaved across
// every project so the page reads as one body of work, not six folders.
type Shot = { src: string; title: string; suburb: string; slug: string };
const shots: Shot[] = (() => {
  const cols = projects.map((p) => [p.cover, ...p.gallery]);
  const depth = Math.max(...cols.map((c) => c.length));
  const out: Shot[] = [];
  // Rotate the starting project each row so no two neighbours are the same
  // project, whatever the column count resolves to.
  for (let r = 0; r < depth; r++) {
    for (let k = 0; k < projects.length; k++) {
      const i = (k + r) % projects.length;
      const p = projects[i];
      const src = cols[i][r];
      if (src) out.push({ src, title: p.title, suburb: p.suburb, slug: p.slug });
    }
  }
  return out.slice(0, 24);
})();

export default function Praise() {
  return (
    <main className="subpage gallery-page">
      <section>
        <Reveal className="pagehead">
          <div className="mono no amber">003 — Praise</div>
          <h1>The work is the word.</h1>
          <p className="lede">
            We&rsquo;d rather show than tell. Every home here was built by Praise and photographed on
            completion — they make the case better than a testimonial could.
          </p>
        </Reveal>

        <div className="masonry">
          {shots.map((s, i) => (
            <Reveal as="div" className="m-cell" key={i} delay={(i % 6) * 60}>
              <Link href={`/work/${s.slug}`} className="m-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src={s.src} alt={`${s.title} — ${s.suburb}`} />
                <span className="m-cap">
                  <b>{s.title}</b>
                  <span>{s.suburb}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Dim label="Built across Sydney" style={{ margin: "20px 0 40px" }} />
        <Reveal className="gallery-foot">
          <p>Picturing your own home in this company?</p>
          <Link href="/contact" className="btn">
            Start a project →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
