import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/providers/AuthProvider";
import { loginSchema, type LoginSchema } from "@/schemas/auth/loginSchema";
import { login } from "@/services/auth/login.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const { saveUser } = useAuth();

  const onSubmit = async (data: LoginSchema) => {
    try {
      const loginData = await login(data);
      saveUser(loginData);
      toast.success("Login realizado com sucesso!");
      navigate("/vehicles");
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message;
        toast.error(errorMessage || "Erro ao realizar login");
      }
    }
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

      <Button className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner />
            Autenticando...
          </>
        ) : (
          "Entrar"
        )}
      </Button>

      <Link
        to="/register"
        className="text-[12px] text-primary font-medium hover:underline"
      >
        Não tem uma conta? Crie agora
      </Link>
    </form>
  );
}

export default LoginPage;
