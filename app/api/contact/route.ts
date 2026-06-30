import { NextResponse } from "next/server";
import { Resend } from "resend";

// Email is sent via Resend. Configure these in the environment (Vercel →
// Project → Settings → Environment Variables):
//   RESEND_API_KEY  – your Resend API key
//   CONTACT_TO       – inbox that receives enquiries (e.g. info@praisebuilding.com.au)
//   CONTACT_FROM     – verified sender (e.g. "Praise Building <website@praisebuilding.com.au>")
//                      defaults to Resend's sandbox sender for testing
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO;
const CONTACT_FROM = process.env.CONTACT_FROM || "Praise Building <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const suburb = String(body.suburb || "").trim();
    const message = String(body.message || "").trim();

    // Re-validate server-side — never trust the client.
    if (!name || !message || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Name, a valid email and a message are required." },
        { status: 400 }
      );
    }

    // Not configured yet — log so nothing is lost, and don't fail the form.
    if (!RESEND_API_KEY || !CONTACT_TO) {
      console.log("New enquiry (email not configured):", { name, email, suburb, message });
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New enquiry — ${suburb || "Sydney"}`,
      text: `Name:   ${name}\nEmail:  ${email}\nSuburb: ${suburb || "—"}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
