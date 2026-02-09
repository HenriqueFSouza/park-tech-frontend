import { getDashboard } from "@/services/dashboard/dashboard.service";
import type { DashboardData, DashboardPeriod } from "@/types/dashboard.types";
import { useEffect, useState } from "react";

interface DashboardResponse {
  data: DashboardData | null;
  isLoading: boolean;
  error: boolean;
}

interface DashboardParams {
  period?: DashboardPeriod;
}
export const useDashboard = (params?: DashboardParams): DashboardResponse => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await getDashboard(params);
      setData(response);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [params?.period]);

  return {
    data,
    isLoading,
    error,
  };
};
