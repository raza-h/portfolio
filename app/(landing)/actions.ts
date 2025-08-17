"use server";

import axios from "axios";

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    await axios.post(
      process.env.EMAIL_SENDER_API_URL!,
      {
        template_params: {
            email: formData.email,
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
        },
        template_id: process.env.EMAIL_SENDER_TEMPLATE_ID!,
        service_id: process.env.EMAIL_SENDER_SERVICE_ID!,
        user_id: process.env.EMAIL_SENDER_USER_ID!,
        accessToken: process.env.EMAIL_SENDER_API_KEY,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.EMAIL_SENDER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return { success: true, message: "Email sent successfully" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: error?.message };
    } else {
      return { success: false, message: "Something went wrong" };
    }
  }
}
