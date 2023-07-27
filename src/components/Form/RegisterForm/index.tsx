import { useForm } from "react-hook-form";
import { TRegisterData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(schema),
  });

  const { userRegister } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit((data) => userRegister(data))}>
      <label htmlFor="name">Nome: </label>
      {errors.name && <p>{errors.name.message}</p>}
      <input type="text" id="name" {...register("name")} />

      <label htmlFor="email">Email: </label>
      {errors.email && <p>{errors.email.message}</p>}
      <input type="email" id="email" {...register("email")} />

      <label htmlFor="password">Senha: </label>
      {errors.password && <p>{errors.password.message}</p>}
      <input type="password" id="password" {...register("password")} />

      <label htmlFor="confirmPassword">confirmar senha: </label>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <input
        type="password"
        id="confirmPassword"
        {...register("confirmPassword")}
      />

      <label htmlFor="phone">telefone: </label>
      {errors.phone && <p>{errors.phone.message}</p>}
      <input type="text" id="phone" {...register("phone")} />

      <button>Cadastre-se</button>
    </form>
  );
};
