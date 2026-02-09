import { DashCard } from "@/components/dashboard/DashCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useDashboard } from "@/hooks/dashboard/useDashboard";
import { type DashboardPeriod } from "@/types/dashboard.types";
import { formatCurrency } from "@/utils/formaters";
import {
    ArrowDownLeft,
    ArrowUpLeft,
    Calendar,
    Car,
    DollarSign,
} from "lucide-react";
import { useState } from "react";

function DashboardPage() {
  const [period, setPeriod] = useState<DashboardPeriod>("week");
  const { data, error } = useDashboard({ period });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl mb-1">Dashboard</h1>
          <p className="text-sm">Visão geral do estacionamento</p>
        </div>

        <Select
          value={period}
          onValueChange={(value) => setPeriod(value as DashboardPeriod)}
        >
          <SelectTrigger className="w-52 h-10! bg-white">
            <Calendar />
            <SelectValue placeholder="Perído" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="week">Últimos 7 dias</SelectItem>
            <SelectItem value="month">Últimos mês</SelectItem>
            <SelectItem value="all">Todo período</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
          Erro ao carregar dados, tente novamente
        </div>
      )}

      <div className="grid grid-cols-4 gap-6">
        <DashCard
          title="Veículos Ativos"
          value={data?.activeVehicles}
          icon={Car}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <DashCard
          title="Total de Entradas"
          value={data?.totalEntries}
          icon={ArrowDownLeft}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <DashCard
          title="Total de Saídas"
          value={data?.totalExits}
          icon={ArrowUpLeft}
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-600"
        />
        <DashCard
          title="Receita Total"
          value={formatCurrency(data?.totalRevenue || 0)}
          icon={DollarSign}
          iconBgColor="bg-emerald-100"
          iconColor="text-emerald-600"
        />
      </div>
    </div>
  );
}

export default DashboardPage;
