import { SearchInput } from "@/components/ui/search-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateVehicleDialog } from "@/components/vehicles/Dialogs/CreateVehicleDialog";
import { VehiclesTable } from "@/components/vehicles/VehiclesTable";
import { useDebounce } from "@/hooks/useDebounce";
import { useVehicles } from "@/hooks/vehicles/useVehicles";
import { Filter } from "lucide-react";
import { useState } from "react";

function VehiclesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"ACTIVE" | "FINISHED" | "all">("all");
  const debouncedSearch = useDebounce(search);
  const { data, isLoading, refetch } = useVehicles({
    search: debouncedSearch,
    status: status === "all" ? undefined : status,
  });

  return (
    <div className="space-y-4">
      <h1 className="font-semibold text-2xl">Gestão de Veículos</h1>

      <div className="bg-white shadow-sm p-4 rounded-lg flex justify-between">
        <div className="flex gap-4">
          <SearchInput
            placeholder="Buscar registro"
            className="h-10"
            containerClassName="w-80!"
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select onValueChange={(value) => setStatus(value as typeof status)}>
            <SelectTrigger className="w-52 h-10!">
              <Filter />
              <SelectValue placeholder="Todos Selecionados" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos Selecionados</SelectItem>
              <SelectItem value="ACTIVE">Estacionado</SelectItem>
              <SelectItem value="FINISHED">Saída registrada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <CreateVehicleDialog onSuccess={refetch} />
      </div>

      <VehiclesTable data={data} isLoading={isLoading} onEditSucess={refetch} />
    </div>
  );
}

export default VehiclesPage;
