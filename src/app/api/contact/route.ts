import { NextRequest, NextResponse } from "next/server";

const RECIPIENT = "info@digitalvolunteers.de";
const SUBJECT = "Message from the Website digitalvolunteers.de";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!email || !message || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }
    // Optional: integrate with Resend, SendGrid, or SMTP here.
    // For now we return success; you can add an email provider later.
    const mailPayload = {
      to: RECIPIENT,
      subject: SUBJECT,
      from: email,
      replyTo: email,
      text: `Name: ${name || "(not provided)"}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    // Placeholder: log in dev; in production set RESEND_API_KEY or similar and send.
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact form]", mailPayload);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
