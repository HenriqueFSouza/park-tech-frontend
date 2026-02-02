import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  editPriceSchema,
  type EditPriceSchema,
} from "@/schemas/prices/editPriceSchema";
import type { Price } from "@/types/prices.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useForm } from "react-hook-form";

interface EditPriceDialogProps {
  editingPrice: Price;
}
export function EditPriceDialog({ editingPrice }: EditPriceDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editPriceSchema),
    defaultValues: {
      additionalHourPrice: editingPrice.additionalHourPrice,
      firstHourPrice: editingPrice.firstHourPrice,
    },
  });

  const onSubmit = (data: EditPriceSchema) => {
    console.log("New price data", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon-sm" variant="outline">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Editar Preço</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para alterar um preço
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <Input
            id="firstHourPrice"
            label="Preço primeira hora"
            placeholder="ex: 15"
            error={errors.firstHourPrice?.message}
            {...register("firstHourPrice", {
              valueAsNumber: true,
            })}
          />
          <Input
            id="additionalHourPrice"
            label="Preço horas adicionais"
            placeholder="ex: 10"
            error={errors.additionalHourPrice?.message}
            {...register("additionalHourPrice", {
              valueAsNumber: true,
            })}
          />
          <DialogFooter className="w-full grid grid-cols-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Editar Preço</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
