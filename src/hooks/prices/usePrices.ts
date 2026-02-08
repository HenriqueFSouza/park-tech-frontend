import { getPrices } from "@/services/prices/prices.service";
import type { Price } from "@/types/prices.types";
import { useEffect, useState } from "react";

interface PricesResponse {
  data: Price[] | [];
  error: boolean;
  isLoading: boolean;
  refetch: () => void;
}

export const usePrices = (): PricesResponse => {
  const [data, setData] = useState<Price[] | []>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await getPrices();
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
