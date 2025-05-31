# tipjar-plugin
{
  "/.well-known/ai-plugin.json": {
    "schema_version": "v1",
    "name_for_human": "TipJar.bot",
    "name_for_model": "tipjar",
    "description_for_human": "Auto-donate to knowledge sources like Wikipedia when AI cites them.",
    "description_for_model": "Track Wikipedia citations in chat and suggest small donations to support open knowledge.",
    "auth": {
      "type": "none"
    },
    "api": {
      "type": "openapi",
      "url": "https://usetipjar.com/openapi.yaml"
    },
    "logo_url": "https://usetipjar.com/logo.png",
    "contact_email": "support@usetipjar.com",
    "legal_info_url": "https://usetipjar.com/privacy"
  },

  "/privacy.html": """
  <!DOCTYPE html>
  <html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>TipJar Privacy Policy</title>
  </head>
  <body>
    <h1>TipJar Privacy Policy & Terms of Service</h1>
    <p><strong>Last Updated:</strong> May 31, 2025</p>
    <h2>🔍 What We Collect</h2>
    <ul>
      <li>We log when AI tools cite Wikipedia (or similar sources).</li>
      <li>Data collected: Citation count, anonymous usage ID.</li>
      <li>We do <em>not</em> store your chats or personal data unless explicitly authorized.</li>
    </ul>
    <h2>🔐 Use of Data</h2>
    <ul>
      <li>To display your running citation count.</li>
      <li>To estimate and optionally process donations.</li>
      <li>We never sell or share your data.</li>
    </ul>
    <h2>📜 Terms of Use</h2>
    <ul>
      <li>By using TipJar, you agree to allow citation tracking within supported apps.</li>
      <li>Donations are optional unless you explicitly authorize them.</li>
      <li>TipJar is provided \"as is\" without warranties.</li>
    </ul>
    <h2>💸 Sustainable Funding (Future Transparency)</h2>
    <ul>
      <li>We may take a <strong>tiny fee</strong> (1–3%) from processed donations to support upkeep.</li>
      <li>We may offer a <strong>premium dashboard</strong> for advanced controls.</li>
      <li>We may partner with nonprofits/brands to <strong>match donations</strong>.</li>
    </ul>
    <h2>📬 Contact</h2>
    <p>Email: <a href=\"mailto:support@usetipjar.com\">support@usetipjar.com</a></p>
  </body>
  </html>
  """,

  "/index.html": """
  <!DOCTYPE html>
  <html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>TipJar: Support Open Knowledge</title>
  </head>
  <body style=\"font-family: sans-serif; text-align: center; padding: 4em;\">
    <img src=\"https://usetipjar.com/logo.png\" alt=\"TipJar logo\" width=\"120\"/>
    <h1>TipJar.bot</h1>
    <p>Every time your AI cites Wikipedia, we log it — and you tip 5¢ to support open knowledge. Automatically.</p>
    <a href=\"mailto:support@usetipjar.com\" style=\"display:inline-block;margin-top:2em;padding:1em 2em;background:black;color:white;border-radius:6px;text-decoration:none;\">Get Involved</a>
  </body>
  </html>
  """,

  "/openapi.yaml": "openapi: 3.0.0\ninfo:\n  title: TipJar API\n  version: 1.0.0\npaths:\n  /track:\n    post:\n      summary: Log a Wikipedia citation\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                user_id:\n                  type: string\n                source:\n                  type: string\n                  enum: [wikipedia, archive, stackoverflow]\n      responses:\n        '200':\n          description: Citation logged"
}
