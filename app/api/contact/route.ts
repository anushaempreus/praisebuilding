import { NextResponse } from "next/server";

// Minimal handler. Wire this to SendGrid / Resend the same way as the
// Empreus site — read your API key from process.env and send the mail here.
export async function POST(req: Request) {
  try {
    const { name, email, suburb, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // TODO: send the enquiry, e.g.
    // await sgMail.send({
    //   to: "hello@praisebuilding.com.au",
    //   from: "website@praisebuilding.com.au",
    //   subject: `New enquiry — ${suburb || "Sydney"}`,
    //   text: `${name} (${email})\n\n${message}`,
    // });
    console.log("New enquiry:", { name, email, suburb, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
