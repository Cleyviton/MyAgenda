import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, schema } from "./validator";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });

  const { userLogin } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit((data) => userLogin(data))}>
      <label htmlFor="email">Email: </label>
      {errors.email && <p>{errors.email.message}</p>}
      <input type="email" id="email" {...register("email")} />

      <label htmlFor="password">Senha: </label>
      {errors.password && <p>{errors.password.message}</p>}
      <input type="password" id="password" {...register("password")} />

      <button>Entrar</button>
    </form>
  );
};
