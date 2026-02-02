import z from "zod";

export const createPriceSchema = z.object({
  additionalHourPrice: z.number().min(5, "O nome é obrigatório"),
  firstHourPrice: z.number().min(5, "O nome é obrigatório"),
});

export type CreatePriceSchema = z.infer<typeof createPriceSchema>;
