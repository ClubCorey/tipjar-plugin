import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    await sendgrid.send({
      to: 'your-email@example.com',               // ✅ recipient (you)
      from: 'test@usetipjar.com',                 // ✅ this must be your authenticated domain
      subject: 'Test Email from SendGrid via Vercel',
      text: 'Hello! This is a test email sent from your deployed Vercel app.',
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email failed to send' });
  }
}
