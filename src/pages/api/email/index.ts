import type { APIRoute } from "astro";
import { validateMessage } from "./message.schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  try {
    const parsedBody = validateMessage(body);
    const send = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: import.meta.env.MY_EMAIL,
      subject: `${parsedBody.author || "Message Porfolio"}  👋`,
      text: parsedBody.message,
      html: `<p>${parsedBody.message}</p>`,
    });

    if (!send.error) {
      return new Response(JSON.stringify(send.data), { status: 200 });
    }

    return new Response(JSON.stringify(send.error), { status: 500 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify(error.message), { status: 400 });
    }

    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
};
