import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, summary } = req.body;

  if (!email || !summary) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const msg = {
    to: email,
    from: 'hello@usetipjar.com',
    subject: `Your 2025 TipJar Summary ✨`,
    html: `
      <h1>Hi ${name || 'there'} 👋</h1>
      <p>Here's your year-end wrap-up with TipJar:</p>
      <pre style="font-family: monospace; background: #f6f6f6; padding: 1em;">${summary}</pre>
      <p>Want to support open knowledge? Your tips have helped power free information worldwide.</p>
      <p><a href="https://usetipjar.com" style="color:#1a73e8;">Visit TipJar</a> or <a href="mailto:hello@usetipjar.com">reach out</a> to get involved.</p>
      <br><p style="font-size:0.8em;color:#888;">You're receiving this email because you opted into TipJar. No worries—we never auto-donate or track without permission.</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error.response?.body || error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
