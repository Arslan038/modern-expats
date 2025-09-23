import sgMail from '@sendgrid/mail'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // Set SendGrid API key
  sgMail.setApiKey(config.sendgridApiKey)
  
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      throw new Error('Missing required fields')
    }
    
    const msg = {
      to: config.adminEmail,
      from: config.sendgridFromEmail,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Destination:</strong> ${body.destination}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
      text: `
        New Contact Form Submission
        Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}
        Submitted at: ${new Date().toLocaleString()}
      `
    }
    
    await sgMail.send(msg)
    
    return {
      status: 200,
      message: 'Email sent successfully'
    }
    
  } catch (error) {
    console.error('SendGrid error:', error)
    
    if (error.response) {
      console.error('SendGrid response error:', error.response.body)
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})