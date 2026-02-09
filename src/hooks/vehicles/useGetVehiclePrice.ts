import { getVehiclePrice } from "@/services/vehicles/vehicles.service";
import { useEffect, useState } from "react";

interface GetVehiclePriceResponse {
  data: { totalValue?: number };
  error: boolean;
  isLoading: boolean;
}

interface GetVehiclePriceParams {
  id: string;
}

export const useGetVehiclePrice = ({
  id,
}: GetVehiclePriceParams): GetVehiclePriceResponse => {
  const [data, setData] = useState<GetVehiclePriceResponse["data"]>({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await getVehiclePrice({ id });
      setData(response);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading: isLoading,
  };
};
