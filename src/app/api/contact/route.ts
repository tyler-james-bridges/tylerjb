import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, message } = data as {
      name: string;
      email: string;
      message: string;
    };

    const sendResult = await resend.emails.send({
      from: "tjb@tylerjb.dev",
      to: "tylerjamesbridges@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (sendResult.error) {
      console.error("Resend error:", sendResult.error);
      return NextResponse.json(
        {
          success: false,
          error: sendResult.error.message || "Failed to send email.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to send email." },
      { status: 500 },
    );
  }
}
