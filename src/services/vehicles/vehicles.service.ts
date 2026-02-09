import { api } from "@/lib/axios";

interface GetVehiclesParams {
  search?: string;
}
export async function getVehicles(params: GetVehiclesParams) {
  const { data } = await api.get("/parking", { params });
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

export async function exitVehicle({ id }: { id: string }) {
  return await api.post(`/parking/${id}/exit`);
}

export async function getVehiclePrice({ id }: { id: string }) {
  const { data } = await api.get(`/parking/${id}/price`);
  return data;
}
