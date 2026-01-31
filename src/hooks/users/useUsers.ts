import { getUsers } from "@/services/users/users.service";
import type { User } from "@/types/users.types";
import { useEffect, useState } from "react";

interface UsersResponse {
  data: User[] | [];
  error: boolean;
  isLoading: boolean;
}

export const useUsers = (): UsersResponse => {
  const [data, setData] = useState<User[] | []>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await getUsers();
        setData(response.data);
      } catch {
        setError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading: isLoading,
  };
};
