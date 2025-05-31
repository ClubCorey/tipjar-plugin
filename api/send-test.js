import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    await sendgrid.send({
      to: 'corey.thorn@gmail.com',      // 👈 Your real inbox here
      from: 'test@usetipjar.com',        // 👈 Your verified domain
      subject: 'SendGrid Test Email',
      text: 'This is a test email sent from Vercel using SendGrid.',
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email failed to send' });
  }
}
