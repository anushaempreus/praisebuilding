import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Work — Praise Building" };

export default function WorkIndex() {
  return (
    <main className="subpage">
      <section className="work">
        <Reveal className="pagehead">
          <div className="mono no">002 — Selected work</div>
          <h1>A record of homes built across Sydney.</h1>
        </Reveal>
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </section>
    </main>
  );
}
