import Link from "next/link";
import Reveal from "./Reveal";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const no = `Project ${String(index + 1).padStart(2, "0")} / Scale 1:100`;
  return (
    <Reveal as="article" className="project">
      <div className="pg">
        <Link href={`/work/${p.slug}`} className="frame">
          <span className="badge">{p.suburb}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" src={p.cover} alt={p.title} />
        </Link>
        <div className="info">
          <div className="pno mono">{no}</div>
          <h3>
            <Link href={`/work/${p.slug}`}>{p.title}</Link>
          </h3>
          <p>{p.brief}</p>
          <div className="specs">
            <div>
              <span className="k">Suburb</span>
              <span className="v">{p.suburb}</span>
            </div>
            <div>
              <span className="k">Scope</span>
              <span className="v">{p.scope}</span>
            </div>
            <div>
              <span className="k">Frames</span>
              <span className="v">{p.gallery.length + 1}</span>
            </div>
          </div>
          <Link href={`/work/${p.slug}`} className="view-link mono">
            View project →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
