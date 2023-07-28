import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, schema } from "./validator";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { StyledForm } from "../styles";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });

  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyledForm onSubmit={handleSubmit((data) => userLogin(data))}>
      <p>Fazer login</p>

      <label htmlFor="email" className={errors.email && "error"}>
        * Email:
      </label>
      <input
        type="email"
        id="email"
        className={errors.email && "error"}
        placeholder="Digite o seu email..."
        {...register("email")}
      />

      <label htmlFor="password" className={errors.password && "error"}>
        * Senha:
      </label>

      <input
        type="password"
        id="password"
        className={errors.password && "error"}
        placeholder="Digite a sua senha..."
        {...register("password")}
      />

      <button>Entrar</button>
      <span>ou</span>
      <button
        className="button"
        type="button"
        onClick={() => navigate("/register")}
      >
        Cadastrar-se
      </button>
    </StyledForm>
  );
};
