import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import type { Vehicle } from "@/types/vehicles.types";
import { LogOut } from "lucide-react";

interface ExitVehicleDialogProps {
  vehicle: Vehicle;
}

export function ExitVehicleDialog({ vehicle }: ExitVehicleDialogProps) {
  return (
    <Dialog>
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

          <p className="font-bold">{vehicle.model}</p>
        </div>
        <DialogFooter className="w-full grid grid-cols-2 mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Confirmar Saída</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
