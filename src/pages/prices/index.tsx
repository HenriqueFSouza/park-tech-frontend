import { CreatePriceDialog } from "@/components/prices/Dialogs/CreatePriceDialog";
import { PricesTable } from "@/components/prices/PricesTable";
import { usePrices } from "@/hooks/prices/usePrices";

function PricesPage() {
  const { data, isLoading } = usePrices();
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Gestão de Preços</h1>

        <CreatePriceDialog />
      </div>

      <PricesTable data={data} isLoading={isLoading} />
    </div>
  );
}

export default PricesPage;
