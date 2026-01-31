import { createContext, useContext } from "react";

type AuthContextData = {
  user: {
    name: string;
    email: string;
  };
  isAuthenticated: boolean;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const user = { name: "Henrique", email: "henrique@email.com" };
  const isAuthenticated = true;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuth must be used within the context AuthProvider");
  }

  return context;
};
