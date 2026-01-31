import z from "zod";

export const loginSchema = z.object({
  email: z.email("Insira um email válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
