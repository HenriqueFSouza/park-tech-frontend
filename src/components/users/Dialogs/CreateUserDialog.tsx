import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  createUserSchema,
  type CreateUserSchema,
} from "@/schemas/users/createUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

export function CreateUserDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = (data: CreateUserSchema) => {
    console.log("New user data", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">
          <Plus />
          Adicionar Usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Adicione um Usuário</DialogTitle>
          <DialogDescription>
            Preencha os dados necessários para adicionar um novo usuário
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <Input
            id="name"
            label="Nome"
            placeholder="ex: João"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            id="email"
            label="E-mail"
            placeholder="ex: joaao@email.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            id="password"
            label="Senha"
            placeholder="*****"
            error={errors.password?.message}
            {...register("password")}
          />
          <DialogFooter className="w-full grid grid-cols-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Criar Usuário</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
