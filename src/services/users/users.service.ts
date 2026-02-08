// import { api } from "@/lib/axios";

import { api } from "@/lib/axios";

export async function getUsers() {
  const { data } = await api.get("/users");
  return data;
}

interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

export async function creatUser(payload: CreateUserPayload) {
  return api.post("/user", payload);
}
