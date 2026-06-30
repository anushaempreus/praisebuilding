"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const asideImg = projects.find((p) => p.slug === "annandale")?.cover ?? projects[0].cover;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      suburb: String(fd.get("suburb") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    // Required-field check (also catches whitespace-only entries the browser allows).
    if (!data.name || !data.message || !EMAIL_RE.test(data.email)) {
      setErrMsg("Please add your name, a valid email and a short note about the project.");
      setStatus("error");
      return;
    }

    setStatus("sending");
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
      setErrMsg("Something went wrong — please try again in a moment.");
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
          <form onSubmit={submit} className="form" noValidate>
            <label>
              <span className="mono">Name <span className="req">*</span></span>
              <input name="name" required />
            </label>
            <label>
              <span className="mono">Email <span className="req">*</span></span>
              <input name="email" type="email" required />
            </label>
            <label>
              <span className="mono">Suburb <span className="opt">(optional)</span></span>
              <input name="suburb" />
            </label>
            <label className="full">
              <span className="mono">About the project <span className="req">*</span></span>
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send enquiry →"}
            </button>
            {status === "sent" && <p className="note ok">Thanks — we’ll be in touch shortly.</p>}
            {status === "error" && <p className="note err">{errMsg}</p>}
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
