import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Log the received data (for debugging)
    console.log("Contact form submission:", { name, email, message })

    // In a real implementation, you would send this data to an email service
    // For now, we'll just simulate a successful response

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Message received! We'll contact you soon.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process your message. Please try again later." },
      { status: 500 },
    )
  }
}
