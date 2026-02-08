import z from "zod";

export const editPriceSchema = z.object({
  additionalHourPrice: z.number().min(5, "O nome é obrigatório").optional(),
  firstHourPrice: z.number().min(5, "O nome é obrigatório").optional(),
  isActive: z
    .string()
    .optional()
    .transform((data) => {
      if (data === "true") {
        return;
      }
      return false;
    }),
});

export type EditPriceSchema = z.infer<typeof editPriceSchema>;
