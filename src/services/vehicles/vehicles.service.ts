// import { api } from "@/lib/axios";

import type { VehicleStatus } from "@/types/vehicles.types";
import { spleep } from "@/utils/sleep";

export async function getVehicles() {
  //   const response = await api.get("/parking");
  const mockVechiles = [
    {
      id: "398qy42a8f32f2",
      color: "Preto",
      model: "Palio",
      plate: "DFE4R3G",
      totalValue: 25,
      exitAt: undefined,
      status: "ACTIVE" as VehicleStatus,
      createdAt: "2026-01-29 09:48:32",
      updatedAt: "2026-01-29 16:48:32",
    },
    {
      id: "afeaefaefeaefa",
      color: "Branco",
      model: "Hillux",
      plate: "JGT7R8E",
      totalValue: 80,
      exitAt: undefined,
      status: "FINISHED" as VehicleStatus,
      createdAt: "2026-01-28 16:48:32",
      updatedAt: "2026-01-29 16:48:32",
    },
  ];
  await spleep();
  return { data: mockVechiles };
}
