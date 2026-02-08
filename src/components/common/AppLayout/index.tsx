import { useAuth } from "@/providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

export function AppLayout() {
  const { isAuthenticated, isLoading } = useAuth();

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="bg-background h-full">
      <SideBar />

      <div className="ml-65">
        <Header />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
