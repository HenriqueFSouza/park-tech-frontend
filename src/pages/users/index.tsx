import { CreateUserDialog } from "@/components/users/Dialogs/CreateUserDialog";
import { UsersTable } from "@/components/users/UsersTable";
import { useUsers } from "@/hooks/users/useUsers";

function UsersPage() {
  const { data, isLoading } = useUsers();
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Gestão de Usuários</h1>
        <CreateUserDialog />
      </div>

      <UsersTable data={data} isLoading={isLoading} />
    </div>
  );
}

export default UsersPage;
