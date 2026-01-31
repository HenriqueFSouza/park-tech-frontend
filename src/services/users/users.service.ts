// import { api } from "@/lib/axios";

import type { UserRole } from "@/types/users.types";
import { sleep } from "@/utils/sleep";

export async function getUsers() {
  // const response = await api.get("/users");
  const mockUsers = [
    {
      id: "398qy42a8f32f2",
      name: "Rodolfo",
      email: "rodolfo@gmail.com",
      role: "USER" as UserRole,
      createdAt: "2026-01-31 02:48:32",
      updatedAt: "2026-01-31 16:48:32",
    },
    {
      id: "afeaefaefeaefa",
      name: "Henrique",
      email: "henrique@gmail.com",
      role: "USER" as UserRole,
      createdAt: "2026-01-30 16:48:32",
      updatedAt: "2026-01-31 16:48:32",
    },
  ];
  await sleep();
  return { data: mockUsers };
}
