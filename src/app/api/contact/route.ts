import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  if (!name || !email || !message || !email.includes("@") || body.consent !== true) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, code: "unconfigured" }, { status: 503 });
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      company: String(body.company || ""),
      phone: String(body.phone || ""),
      service: String(body.service || ""),
      budget: String(body.budget || ""),
      message,
      intent: String(body.intent || "contact"),
      tcpa: Boolean(body.tcpa),
    }),
  });

  if (!response.ok) return NextResponse.json({ ok: false }, { status: 502 });
  return NextResponse.json({ ok: true });
}
