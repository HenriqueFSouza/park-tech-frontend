import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/providers/AuthProvider";
import { loginSchema, type LoginSchema } from "@/schemas/auth/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const context = useAuth();

  console.log(context);

  const onSubmit = (data: LoginSchema) => {
    console.log("Login Data", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-5"
    >
      <h1 className="text-gray-800 font-semibold text-[24px] text-center">
        Acesso ao Sistema de Estacionamento
      </h1>

      <p className="text-sm text-muted-foreground mb-4">
        Insira suas credenciais para continuar
      </p>

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

      <Button className="w-full">Entrar</Button>

      <Button variant="link">Não tem uma conta? Crie agora</Button>
    </form>
  );
}

export default LoginPage;
