import type { VehicleStatus } from "@/types/vehicles.types";

export function formatDate(dateParam: string | Date) {
  const date = typeof dateParam === "string" ? new Date(dateParam) : dateParam;

  const formater = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return formater;
}

export function getStayTime(etryTime: string | Date) {
  const now = new Date();
  const entry = typeof etryTime === "string" ? new Date(etryTime) : etryTime;

  const totalTime = now.getTime() - entry.getTime();

  const totalMinutes = Math.floor(totalTime / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}min`;
}

export function getVehicleStatus(status: VehicleStatus) {
  const options = {
    ["ACTIVE"]: "Estacionado",
    ["FINISHED"]: "Saída Registrada",
  };

  return options[status];
}
