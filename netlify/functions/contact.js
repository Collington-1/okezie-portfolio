const TO_EMAIL = 'okeziecollington@yahoo.com'
const FROM_EMAIL = 'Portfolio Contact <onboarding@resend.dev>'

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Email service is not configured.' }) }
  }

  let data
  try {
    data = JSON.parse(event.body || '{}')
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body.' }) }
  }

  const { name, email, phone, company, service, budget, message } = data

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, email and message are required.' }) }
  }

  const escapeHtml = (value = '') =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

  const html = `
    <h2>New project inquiry from ${escapeHtml(name)}</h2>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
    <p><strong>Company:</strong> ${escapeHtml(company) || '—'}</p>
    <p><strong>Service needed:</strong> ${escapeHtml(service) || '—'}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget) || '—'}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New project inquiry from ${name}`,
        html,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend API error:', response.status, errorBody)
      return { statusCode: 502, body: JSON.stringify({ error: 'Failed to send message.' }) }
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error('Contact function error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send message.' }) }
  }
}
