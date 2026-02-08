import { api } from "@/lib/axios";

export const getAuthUser = async () => {
  return await api.get("/me");
};
