import { Button } from "@/components/ui/button";
import { UsersTable } from "@/components/users/UsersTable";
import { useUsers } from "@/hooks/users/useUsers";
import { Plus } from "lucide-react";

function UsersPage() {
  const { data, isLoading } = useUsers();
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Gestão de Usuários</h1>
        <Button>
          <Plus />
          Adicionar Usuário
        </Button>
      </div>

      <UsersTable data={data} isLoading={isLoading} />
    </div>
  );
}

export default UsersPage;
