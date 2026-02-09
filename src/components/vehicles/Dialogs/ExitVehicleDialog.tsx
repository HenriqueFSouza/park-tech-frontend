import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetVehiclePrice } from "@/hooks/vehicles/useGetVehiclePrice";
import { exitVehicle } from "@/services/vehicles/vehicles.service";
import type { Vehicle } from "@/types/vehicles.types";
import { formatCurrency } from "@/utils/formaters";
import { AxiosError } from "axios";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ExitVehicleDialogProps {
  vehicle: Vehicle;
  onSuccess: () => void;
}

export function ExitVehicleDialog({
  vehicle,
  onSuccess,
}: ExitVehicleDialogProps) {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetVehiclePrice({ id: vehicle.id });

  async function handleExitVehicle() {
    try {
      await exitVehicle({ id: vehicle.id });
      onSuccess();
      setOpen(false);
      toast.success("Saída registrada com sucesso!");
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message;
        toast.error(errorMessage || "Erro ao registrar saída");
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon-sm">
          <LogOut />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Saída de veículo</DialogTitle>
        </DialogHeader>
        <div className="text-center">
          <p className="text-muted-foreground">
            Você realmente deseja registrar a saído do veículo?
          </p>

          <p className="font-semibold mb-4 ">{vehicle.model}</p>

          <p className="text-muted-foreground">Valor total a ser pago</p>
          <p className="font-bold text-lg">{formatCurrency(data.totalValue)}</p>
        </div>
        <DialogFooter className="w-full grid grid-cols-2 mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button onClick={handleExitVehicle} disabled={isLoading}>
            Confirmar Saída
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
