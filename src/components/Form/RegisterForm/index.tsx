import { useForm } from "react-hook-form";
import { TRegisterData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { StyledForm } from "../styles";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(schema),
  });

  const { userRegister } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyledForm onSubmit={handleSubmit((data) => userRegister(data))}>
      <p>Cadastro</p>
      <label htmlFor="name" className={errors.name && "error"}>
        * Nome:
      </label>
      <input
        type="text"
        id="name"
        className={errors.password && "error"}
        placeholder="Digite o seu nome..."
        {...register("name")}
      />

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

      <label htmlFor="confirmPassword" className={errors.password && "error"}>
        * Confirmar senha:
      </label>
      <input
        type="password"
        id="confirmPassword"
        className={errors.confirmPassword && "error"}
        placeholder="Confirme a sua senha..."
        {...register("confirmPassword")}
      />

      <label htmlFor="phone" className={errors.password && "error"}>
        * telefone:
      </label>
      <input
        type="text"
        id="phone"
        className={errors.email && "error"}
        placeholder="Digite o seu telefone..."
        {...register("phone")}
      />

      <button>Cadastre-se</button>
      <span>ou</span>
      <button className="button" type="button" onClick={() => navigate("/")}>
        Fazer login
      </button>
    </StyledForm>
  );
};
