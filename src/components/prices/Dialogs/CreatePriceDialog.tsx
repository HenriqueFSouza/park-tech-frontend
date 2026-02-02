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
  createPriceSchema,
  type CreatePriceSchema,
} from "@/schemas/prices/createPriceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

export function CreatePriceDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createPriceSchema),
  });

  const onSubmit = (data: CreatePriceSchema) => {
    console.log("New price data", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Adicionar Preço
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Novo Preço</DialogTitle>
          <DialogDescription>
            Preencha os dados necessários para adicionar um novo preço
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
            <Button type="submit">Criar Preço</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
