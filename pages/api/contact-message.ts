import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactMessageData = {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  coverageAmount?: string;
  preferredContact: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      insuranceType,
      coverageAmount,
      preferredContact,
      message,
    } = req.body as ContactMessageData;

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Kentab Insurance" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Contact Message - ${insuranceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Insurance Type:</strong> ${insuranceType}</p>
        ${coverageAmount ? `<p><strong>Desired Coverage Amount:</strong> KES ${coverageAmount}</p>` : ''}
        <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
} 