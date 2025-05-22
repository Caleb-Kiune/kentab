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

// Enhanced logging utility
function logWithTimestamp(level: 'info' | 'warn' | 'error', message: string, data?: any) {
  const timestamp = new Date().toISOString();
  const logData = data ? JSON.stringify(data, null, 2) : '';
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message} ${logData}`;
  
  switch (level) {
    case 'error':
      console.error(logMessage);
      break;
    case 'warn':
      console.warn(logMessage);
      break;
    default:
      console.log(logMessage);
  }
}

// Async function to send email
async function sendEmail(data: ContactFormData) {
  const startTime = Date.now();
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
    const duration = Date.now() - startTime;
    logWithTimestamp('info', `Email sent successfully to ${process.env.CONTACT_TO_EMAIL}`, {
      duration: `${duration}ms`,
      recipient: process.env.CONTACT_TO_EMAIL,
      insuranceType: data.insuranceType
    });
  } catch (error) {
    const duration = Date.now() - startTime;
    logWithTimestamp('error', 'Failed to send email', {
      duration: `${duration}ms`,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      formData: {
        email: data.email,
        insuranceType: data.insuranceType
      }
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Log incoming request
  logWithTimestamp('info', 'Incoming request', {
    method: req.method,
    url: req.url,
    body: req.body
  });

  if (req.method !== 'POST') {
    logWithTimestamp('warn', 'Invalid method', { method: req.method });
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body as ContactFormData;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'insuranceType', 'preferredContactMethod', 'preferredContactTime'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof ContactFormData]);

    if (missingFields.length > 0) {
      logWithTimestamp('warn', 'Validation failed', { 
        missingFields,
        providedData: {
          email: formData.email,
          insuranceType: formData.insuranceType
        }
      });

      return res.status(400).json({ 
        message: 'Missing required fields', 
        fields: missingFields 
      });
    }

    // Start email sending process asynchronously
    sendEmail(formData).catch(error => {
      logWithTimestamp('error', 'Unhandled email sending error', {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
    });

    // Log successful request processing
    logWithTimestamp('info', 'Request processed successfully', { 
      email: formData.email,
      insuranceType: formData.insuranceType 
    });

    // Immediately respond with success
    return res.status(200).json({ 
      message: 'Quote request received successfully',
      note: 'You will be contacted within 24 hours'
    });

  } catch (error) {
    logWithTimestamp('error', 'Request processing error', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      requestBody: req.body
    });

    return res.status(500).json({ message: 'Failed to process request' });
  }
} 