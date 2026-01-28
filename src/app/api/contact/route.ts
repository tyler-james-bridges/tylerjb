import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';
import type { ContactFormData } from '../../../types/api';

// Initialize Resend with fallback for build time
const resend = new Resend(
  process.env.RESEND_API_KEY || 're_dummy_key_for_build'
);

export async function POST(request: NextRequest) {
  try {
    // Check for API key at runtime
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const data = await request.json();
    const { name, email, message } = data as ContactFormData;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const sendResult = await resend.emails.send({
      from: 'tjb@tylerjb.dev',
      to: 'tylerjamesbridges@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (sendResult.error) {
      // Log error server-side only, don't expose to client
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send email. Please try again.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    // Log error server-side only, don't expose to client
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
