import { getPrices } from "@/services/prices/prices.service";
import type { Price } from "@/types/prices.types";
import { useEffect, useState } from "react";

interface PricesResponse {
  data: Price[] | [];
  error: boolean;
  isLoading: boolean;
}

export const usePrices = (): PricesResponse => {
  const [data, setData] = useState<Price[] | []>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await getPrices();
        setData(response.data);
      } catch {
        setError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading: isLoading,
  };
};
