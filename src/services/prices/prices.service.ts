// import { api } from "@/lib/axios";

import { sleep } from "@/utils/sleep";

export async function getPrices() {
  // const response = await api.get("/price-config");
  const mockPrices = [
    {
      id: "398qy42a8f32f2",
      firstHourPrice: 15,
      additionalHourPrice: 10,
      isActive: true,
      createdAt: "2026-01-31 02:48:32",
      updatedAt: "2026-01-31 16:48:32",
    },
    {
      id: "afeaefaefeaefa",
      firstHourPrice: 25,
      additionalHourPrice: 10,
      isActive: false,
      createdAt: "2026-01-30 16:48:32",
      updatedAt: "2026-01-31 16:48:32",
    },
  ];
  await sleep();
  return { data: mockPrices };
}
