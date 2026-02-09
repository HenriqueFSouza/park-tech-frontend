import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface DashCardProps {
  title: string;
  value?: number | string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
}
export function DashCard({
  title,
  value,
  icon: Icon,
  iconBgColor,
  iconColor,
}: DashCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "size-12 rounded-full flex items-center justify-center",
            iconBgColor,
          )}
        >
          <Icon className={cn("size-6", iconColor)} />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value || 0}</p>
      </div>
    </div>
  );
}
