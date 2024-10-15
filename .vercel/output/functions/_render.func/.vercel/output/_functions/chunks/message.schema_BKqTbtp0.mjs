import { z } from 'zod';

const messageSchema = z.object({
  author: z.string().optional(),
  message: z.string().min(3)
});
function validateMessage(object) {
  try {
    const message = messageSchema.parse(object);
    return message;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
      throw new Error(error.issues.map((issue) => `field ${issue.path} -> ${issue.message}`).join(", "));
    }
    throw new Error(`${error}`);
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  validateMessage
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, validateMessage as v };
