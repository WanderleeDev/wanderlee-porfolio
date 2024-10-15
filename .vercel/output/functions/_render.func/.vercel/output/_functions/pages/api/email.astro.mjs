import { v as validateMessage } from '../../chunks/message.schema_BKqTbtp0.mjs';
import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_C9pipCCk_AQWcKjtknUEXGZWkFvsaYhcN");
const POST = async ({ request }) => {
  const body = await request.json();
  try {
    const parsedBody = validateMessage(body);
    const send = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "wanderleedev@gmail.com",
      subject: `${parsedBody.author || "Message Porfolio"}  👋`,
      text: parsedBody.message,
      html: `<p>${parsedBody.message}</p>`
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
