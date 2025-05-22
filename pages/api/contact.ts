import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  insuranceType: string;
  preferredContactMethod: string;
  preferredContactTime: string;
  message?: string;
};

// Create a reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Async function to send email
async function sendEmail(data: ContactFormData) {
  try {
    const mailOptions = {
      from: `"Kentab Insurance" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Quote Request - ${data.insuranceType}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Insurance Type:</strong> ${data.insuranceType}</p>
        <p><strong>Preferred Contact Method:</strong> ${data.preferredContactMethod}</p>
        <p><strong>Preferred Contact Time:</strong> ${data.preferredContactTime}</p>
        ${data.message ? `<p><strong>Additional Message:</strong></p><p>${data.message}</p>` : ''}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', process.env.CONTACT_TO_EMAIL);
  } catch (error) {
    // Log error but don't throw it
    console.error('Error sending email:', error);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body as ContactFormData;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'insuranceType', 'preferredContactMethod', 'preferredContactTime'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof ContactFormData]);

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        message: 'Missing required fields', 
        fields: missingFields 
      });
    }

    // Start email sending process asynchronously
    sendEmail(formData).catch(error => {
      console.error('Failed to send email:', error);
    });

    // Immediately respond with success
    return res.status(200).json({ 
      message: 'Quote request received successfully',
      note: 'You will be contacted within 24 hours'
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ message: 'Failed to process request' });
  }
} 