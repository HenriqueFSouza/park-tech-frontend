import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import {
    registerSchema,
    type RegisterSchema,
} from "@/schemas/auth/registerSchema";
import { registerUser } from "@/services/auth/register.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerUser({ role: "ADMIN", ...data });
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message;
        toast.error(errorMessage || "Erro ao criar conta");
      }
    }
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

      <Button className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner />
            Processando...
          </>
        ) : (
          "Criar conta"
        )}
      </Button>

      <Link
        to="/"
        className="text-[12px] text-primary font-medium hover:underline"
      >
        Já tem uma conta? Faça o Login
      </Link>
    </form>
  );
}

export default RegisterPage;
