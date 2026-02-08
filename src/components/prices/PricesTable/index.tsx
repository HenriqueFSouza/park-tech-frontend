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
import type { Price } from "@/types/prices.types";
import { formatDateToDMY } from "@/utils/formaters";
import { EditPriceDialog } from "../Dialogs/EditPriceDialog";

const columns = [
  "Preço Primeira Hora",
  "Preço horas adicionais",
  "Status",
  "Data de criação",
  "Ações",
];

interface PricesTableProps {
  data: Price[];
  isLoading: boolean;
  onEditSucess: () => void;
}

export function PricesTable({
  data,
  isLoading,
  onEditSucess,
}: PricesTableProps) {
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
              {[...Array(5)].map((_, j) => (
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
          data.map((price) => {
            const isActive = price.isActive;
            const status = isActive ? "ATIVO" : "INATIVO";

            return (
              <TableRow key={price.id} className="[&_td]:p-4">
                <TableCell className="font-semibold">
                  {price.firstHourPrice}
                </TableCell>
                <TableCell>{price.additionalHourPrice}</TableCell>
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
                <TableCell>{formatDateToDMY(price.createdAt)}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <EditPriceDialog
                      editingPrice={price}
                      onSuccess={onEditSucess}
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
