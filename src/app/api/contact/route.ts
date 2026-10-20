
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = String(body.fullName ?? "").trim();
    const companyName = String(body.companyName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phoneNo = String(body.phoneNo ?? "").trim();
    const serviceRequired = String(body.serviceRequired ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validate required fields
    if (
      !fullName ||
      !companyName ||
      !email ||
      !phoneNo ||
      !serviceRequired ||
      !message
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (
      fullName.length > 150 ||
      companyName.length > 200 ||
      email.length > 254 ||
      phoneNo.length > 10 ||
      serviceRequired.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Validate Indian mobile number
    if (!/^[6-9]\d{9}$/.test(phoneNo)) {
      return NextResponse.json(
        { error: "Enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const recipient =
      process.env.ENQUIRY_TO_EMAIL || gmailUser;

    if (!gmailUser || !gmailPassword || !recipient) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Eminence Compliance Website" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,

      text: `
New Contact Form Submission

Full Name: ${fullName}
Company Name: ${companyName}
Email Address: ${email}
Phone Number: ${phoneNo}
Service Required: ${serviceRequired}

Message:
${message}
      `.trim(),

      html: `
        <div style="font-family: Arial, sans-serif; color: #20385c;">
          <h2 style="color: #20385c;">
            New Contact Form Submission
          </h2>

          <table cellpadding="8" cellspacing="0"
            style="border-collapse: collapse; width: 100%;">
            <tr>
              <td><strong>Full Name</strong></td>
              <td>${esc(fullName)}</td>
            </tr>
            <tr>
              <td><strong>Company Name</strong></td>
              <td>${esc(companyName)}</td>
            </tr>
            <tr>
              <td><strong>Email Address</strong></td>
              <td>${esc(email)}</td>
            </tr>
            <tr>
              <td><strong>Phone Number</strong></td>
              <td>${esc(phoneNo)}</td>
            </tr>
            <tr>
              <td><strong>Service Required</strong></td>
              <td>${esc(serviceRequired)}</td>
            </tr>
          </table>

          <h3>Message</h3>
          <p style="white-space: pre-wrap;">${esc(message)}</p>

          <hr />
          <p style="color: #bc8737;">
            Eminence Global Compliance Group
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your contact request has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { error: "Failed to send your request. Please try again." },
      { status: 500 }
    );
  }
}
