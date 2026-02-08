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
import { Spinner } from "@/components/ui/spinner";
import {
  createVehicleSchema,
  type CreateVehicleSchema,
} from "@/schemas/vehicles/createVehicleSchema";
import { createVehicle } from "@/services/vehicles/vehicles.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface CreateVehicleDialogProps {
  onSuccess: () => void;
}
export function CreateVehicleDialog({ onSuccess }: CreateVehicleDialogProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createVehicleSchema),
  });

  const onSubmit = async (data: CreateVehicleSchema) => {
    try {
      await createVehicle(data);
      toast.success("Veículo criado com sucesso!");
      reset();
      onSuccess();
      setOpen(false);
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message;
        toast.success(errorMessage || "Usuário criado com sucesso!");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner />
                  Criando...
                </>
              ) : (
                "Salvar Registro"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
