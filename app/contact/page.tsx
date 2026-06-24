"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const asideImg = projects.find((p) => p.slug === "annandale")?.cover ?? projects[0].cover;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="subpage">
      <section className="contact-page">
        <Reveal className="pagehead">
          <div className="mono no amber">005 — Start a project</div>
          <h1>Tell us what you’re building.</h1>
          <p className="lede">A few lines about your home, your suburb and roughly when you’d like to start.</p>
        </Reveal>

        <div className="contact-cols">
        <Reveal className="form-wrap">
          <form onSubmit={submit} className="form">
            <label>
              <span className="mono">Name</span>
              <input name="name" required />
            </label>
            <label>
              <span className="mono">Email</span>
              <input name="email" type="email" required />
            </label>
            <label>
              <span className="mono">Suburb</span>
              <input name="suburb" />
            </label>
            <label className="full">
              <span className="mono">About the project</span>
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send enquiry →"}
            </button>
            {status === "sent" && <p className="note ok">Thanks — we’ll be in touch shortly.</p>}
            {status === "error" && <p className="note err">Something went wrong — please try again in a moment.</p>}
          </form>
        </Reveal>
        <Reveal className="contact-aside" delay={80}>
          <div className="ca-img" style={{ backgroundImage: `url('${asideImg}')` }} />
          <p className="ca-note">From the first conversation to the finished home — built across Sydney.</p>
        </Reveal>
        </div>
      </section>
    </main>
  );
}
