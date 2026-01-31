import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  registerSchema,
  type RegisterSchema,
} from "@/schemas/auth/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log("DATA", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-5"
    >
      <h1 className="text-gray-800 font-semibold text-[24px] text-center">
        Crie sua conta no Sistema de Estacionamento
      </h1>

      <p className="text-sm text-muted-foreground mb-4">
        Insira seus dados para criar uma nova conta
      </p>

      <Input
        id="name"
        label="Nome"
        placeholder="João da Silva"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        id="email"
        label="Email"
        placeholder="joao@email.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        id="password"
        type="password"
        label="Senha"
        placeholder="*****"
        error={errors.password?.message}
        {...register("password")}
      />

      <Button className="w-full" type="submit">
        Criar conta
      </Button>

      <Button variant="link">Já tem uma conta? Faça o Login</Button>
    </form>
  );
}

export default RegisterPage;
