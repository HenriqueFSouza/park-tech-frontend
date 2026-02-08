import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { Vehicle } from "@/types/vehicles.types";
import { formatDate, getStayTime, getVehicleStatus } from "@/utils/formaters";
import { EditVehicleDialog } from "../Dialogs/EditVehicleDialog";
import { ExitVehicleDialog } from "../Dialogs/ExitVehicleDialog";

const columns = [
  "Placa",
  "Modelo",
  "Cor",
  "Horário de entrada",
  "Tempo de permanência",
  "Status",
  "Ações",
];

interface VehiclesTableProps {
  data: Vehicle[];
  isLoading: boolean;
  onEditSucess: () => void;
}

export function VehiclesTable({
  data,
  isLoading,
  onEditSucess,
}: VehiclesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted shadow-sm">
          {columns.map((item, index) => (
            <TableHead
              key={index}
              className="text-[12px] font-semibold text-muted-foreground px-4 py-3 text-left uppercase"
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading &&
          [...Array(5)].map((_, i) => (
            <tr key={i} className="border-t border-input">
              {[...Array(7)].map((_, j) => (
                <td key={j} className="px-4 py-4">
                  <Skeleton
                    className="h-4 rounded"
                    style={{ width: j === 6 ? "80px" : "100px" }}
                  />
                </td>
              ))}
            </tr>
          ))}

        {!isLoading &&
          data.map((vehicle) => {
            const status = getVehicleStatus(vehicle.status);
            const isActive = vehicle.status === "ACTIVE";

            return (
              <TableRow key={vehicle.id} className="[&_td]:p-4">
                <TableCell className="font-semibold">{vehicle.plate}</TableCell>
                <TableCell>{vehicle.model}</TableCell>
                <TableCell>{vehicle.color}</TableCell>
                <TableCell>{formatDate(vehicle.createdAt)}</TableCell>
                <TableCell>{getStayTime(vehicle.createdAt)}</TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "w-fit text-[12px] font-medium bg-gray-100/80 text-gray-600 rounded-lg px-2 py-1",
                      isActive && "bg-green-100/80 text-green-600",
                    )}
                  >
                    {status}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <EditVehicleDialog
                      editingVehicle={vehicle}
                      onSuccess={onEditSucess}
                    />
                    <ExitVehicleDialog vehicle={vehicle} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
