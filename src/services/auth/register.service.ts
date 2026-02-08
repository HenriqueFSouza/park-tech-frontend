import { api } from "@/lib/axios";

interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
  role: string;
}

export async function registerUser(data: RegisterUserProps) {
  return await api.post("/register", data);
}
