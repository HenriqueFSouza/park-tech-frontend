export type VehicleStatus = "ACTIVE" | "FINISHED";

export type Vehicle = {
  id: string;
  color: string;
  model: string;
  plate: string;
  totalValue: number;
  exitAt?: string;
  status: VehicleStatus;
  createdAt: string;
  updatedAt: string;
};
