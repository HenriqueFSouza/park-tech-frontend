import { api } from "@/lib/axios";

export async function getPrices() {
  const { data } = await api.get("/price-config");

  return data;
}

interface CreatePricePayload {
  additionalHourPrice: number;
  firstHourPrice: number;
}
export async function createPrice(payload: CreatePricePayload) {
  return await api.post("/price-config", payload);
}

interface EditPricePayload {
  additionalHourPrice?: number;
  firstHourPrice?: number;
  status?: string;
  id: string;
}
export async function editPrice({ id, ...payload }: EditPricePayload) {
  return await api.put(`/price-config/${id}`, payload);
}
