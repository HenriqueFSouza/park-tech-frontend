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
  editVehicleSchema,
  type EditVehicleSchema,
} from "@/schemas/vehicles/editVehicleSchema";
import type { Vehicle } from "@/types/vehicles.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useForm } from "react-hook-form";

interface EditVehicleDialogProps {
  editingVehicle: Vehicle;
}

export function EditVehicleDialog({ editingVehicle }: EditVehicleDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editVehicleSchema),
    defaultValues: {
      color: editingVehicle.color,
      plate: editingVehicle.plate,
      model: editingVehicle.model,
    },
  });

  const onSubmit = (data: EditVehicleSchema) => {
    console.log("New vehicle data", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon-sm"
          variant="outline"
          className="bg-white text-muted-foreground"
        >
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Edite o veículo</DialogTitle>
          <DialogDescription>
            Atualize os dados do veículo alterando os campos abaixo
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
            <Button type="submit">Editar Registro</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
