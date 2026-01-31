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
    createVehicleSchema,
    type CreateVehicleSchema,
} from "@/schemas/vehicles/createVehicleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

export function CreateVehicleDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createVehicleSchema),
  });

  const onSubmit = (data: CreateVehicleSchema) => {
    console.log("New vehicle data", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">
          <Plus />
          Adicionar Veículo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Adicione o veículo</DialogTitle>
          <DialogDescription>
            Preencha os dados necessários para adicionar um novo veículo
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <Input
            id="plate"
            label="Placa"
            placeholder="DXI3F5H"
            error={errors.plate?.message}
            {...register("plate")}
          />
          <Input
            id="model"
            label="Modelo"
            placeholder="ex: Vectra"
            error={errors.model?.message}
            {...register("model")}
          />
          <Input
            id="color"
            label="Cor"
            placeholder="ex: Azul"
            error={errors.color?.message}
            {...register("color")}
          />
          <DialogFooter className="w-full grid grid-cols-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Salvar Registro</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
