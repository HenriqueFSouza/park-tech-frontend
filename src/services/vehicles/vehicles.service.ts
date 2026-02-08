import { api } from "@/lib/axios";

export async function getVehicles() {
  const { data } = await api.get("/parking");
  return data;
}

interface CreateVehiclePayload {
  plate: string;
  color: string;
  model: string;
}
export async function createVehicle(payload: CreateVehiclePayload) {
  const { data } = await api.post("/parking", payload);
  return data;
}

interface EditVehiclePayload {
  plate?: string;
  color?: string;
  model?: string;
  id: string;
}
export async function editVehicle({ id, ...payload }: EditVehiclePayload) {
  const { data } = await api.put(`/parking/${id}`, payload);
  return data;
}
