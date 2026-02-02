import { cn } from "@/lib/utils";
import { Car, DollarSign, LayoutDashboard, Users } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Logo } from "../Logo";

export function SideBar() {
  const { pathname } = useLocation();
  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      label: "Veículos",
      icon: Car,
      href: "/vehicles",
    },
    {
      label: "Usuários",
      icon: Users,
      href: "/users",
    },
    {
      label: "Preços",
      icon: DollarSign,
      href: "/prices",
    },
  ];

  return (
    <aside className="bg-sidebar w-65 fixed top-0 left-0 h-full">
      <div className="h-18 border-b border-sidebar-border p-6 flex items-center">
        <Logo variant="light" />
      </div>

      <nav className="py-4">
        <ul>
          {menuItems.map((item, index) => {
            const isActive = item.href === pathname;
            const Icon = item.icon;

            return (
              <li
                key={index}
                className={cn(
                  "px-6 text-white/80 transition-colors",
                  "text-sm font-medium mt-2",
                  isActive
                    ? "bg-sidebar-primary border-l-4 border-accent text-white"
                    : "hover:bg-sidebar-primary/50",
                )}
              >
                <a href={item.href} className="flex items-center gap-3 h-12">
                  <Icon className="size-5" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
