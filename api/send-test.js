import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    await sendgrid.send({
      to: 'recipient@example.com', // change to your email
      from: 'your_verified_sender@example.com', // use verified domain
      subject: 'Test Email from Vercel',
      text: 'Hello from SendGrid via Vercel!',
    });

    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
