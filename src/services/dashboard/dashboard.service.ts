import { api } from "@/lib/axios";
import type { DashboardPeriod } from "@/types/dashboard.types";

interface GetDashboardParams {
  period?: DashboardPeriod;
}

export async function getDashboard(params?: GetDashboardParams) {
  const { data } = await api.get("/dashboard", { params });
  return data;
}
