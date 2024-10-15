import { z } from "zod";

const messageSchema = z.object({
  author: z.string().optional(),
  message: z.string().min(3),
});

export function validateMessage(object: unknown): MessageSchema | never {
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

export type MessageSchema = z.infer<typeof messageSchema>;
