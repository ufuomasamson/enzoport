"use server"

import nodemailer from "nodemailer"

type FormData = {
  name: string
  email: string
  message: string
}

export async function sendEmail(formData: FormData) {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "samsonenzo011@gmail.com", // Your email address
        pass: process.env.EMAIL_PASSWORD || "", // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: formData.email,
      to: "samsonenzo011@gmail.com",
      subject: `Portfolio Contact: Message from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B3B98;">New Message from Your Portfolio</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f7f7f7; border-left: 4px solid #3B3B98;">
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}
