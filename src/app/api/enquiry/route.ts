import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    // phone arrives as "+91 9876543210" (dial code + digits)
    if (!/^\+\d{1,4} \d{6,14}$/.test(String(phone))) {
      return NextResponse.json({ error: "Invalid mobile number." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // 16-char Google App Password
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.GMAIL_USER}>`,
      to: process.env.ENQUIRY_TO_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${esc(String(name))}</p>
        <p><b>Email:</b> ${esc(String(email))}</p>
        <p><b>Mobile:</b> ${esc(String(phone))}</p>
        <p><b>Message:</b><br/>${esc(String(message)).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry mail error:", err);
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 500 });
  }
}