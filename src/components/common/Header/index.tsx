import { useAuth } from "@/providers/AuthProvider";
import { User } from "lucide-react";

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white h-18 flex items-center justify-end px-6 shadow-sm">
      <div className="flex gap-3 items-center">
        <div className="text-sm font-semibold">
          <p>{user.name}</p>
          <p className="text-gray-500 font-normal">{user.email}</p>
        </div>

        <div className="size-8 bg-primary text-white rounded-full flex items-center justify-center">
          <User className="size-4" />
        </div>
      </div>
    </header>
  );
}
