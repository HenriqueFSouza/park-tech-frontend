export type DashboardPeriod = "week" | "month" | "today" | "all";

export interface DashboardData {
  activeVehicles: number;
  totalEntries: number;
  totalExits: number;
  totalRevenue: number;
}
