import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  sendMessage: defineAction({
    accept: "form",
    input: z.object({
      from: z.string().optional(),
      message: z.string().min(1).max(500),
    }),
    handler: async (req) => {
      const send = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: import.meta.env.MY_EMAIL,
        subject: `${req.from || "Message Porfolio"}  👋`,
        text: req.message,
        html: `<p>${req.message}</p>`,
      });

      if (send.error) {
        throw new ActionError({
          message: send.error.message,
          code: "BAD_REQUEST",
        });
      }

      return { success: true };
    },
  }),
};
