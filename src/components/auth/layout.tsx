import { Outlet } from "react-router-dom";
import { Logo } from "../common/Logo";

function AuthLayout() {
  return (
    <div className="bg-background min-h-screen w-full text-black flex items-center justify-center">
      <div className="bg-white max-w-105 w-full p-8 rounded-lg shadow-lg flex flex-col items-center">
        <Logo size="lg" />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
