import z from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  email: z.email("Insira um email válido"),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
