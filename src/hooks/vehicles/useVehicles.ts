import { getVehicles } from "@/services/vehicles/vehicles.service";
import type { Vehicle } from "@/types/vehicles.types";
import { useEffect, useState } from "react";

interface VeehiclesResponse {
  data: Vehicle[] | [];
  error: boolean;
  isLoading: boolean;
  refetch: () => void;
}

export const useVehicles = (): VeehiclesResponse => {
  const [data, setData] = useState<Vehicle[] | []>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await getVehicles();
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
    refetch: fetchData,
  };
};
