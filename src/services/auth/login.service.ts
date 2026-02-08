import { api } from "@/lib/axios";

interface LoginProps {
  email: string;
  password: string;
}

export async function login(input: LoginProps) {
  const { data } = await api.post("/login", input);
  return data;
}
