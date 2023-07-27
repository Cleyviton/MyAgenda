import { createContext, useEffect, useState } from "react";
import { IProvidersProps, IUserContext, TUser } from "./@types";
import { TRegisterData } from "../components/Form/RegisterForm/validator";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../components/Form/LoginForm/validator";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProvidersProps) => {
  const [user, setUser] = useState<TUser | null>(null);
  const navigate = useNavigate();

  const getUser = async (token: string) => {
    const response = await api.get("users/retrieve", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@MyAgenda:TOKEN");

      if (token) {
        const response = await getUser(token);

        navigate("/dashboard");
        setUser(response);
      }
    })();
  }, []);

  const userRegister = async (formData: TRegisterData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Registro realizado com sucesso!", {
        autoClose: 1000,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(
        "E-mail já existente, tente cadastrar com um E-mail diferente!",
        {
          autoClose: 1000,
        }
      );
    }
  };

  const userLogin = async (formData: TLoginData) => {
    try {
      const response = await api.post("/login", formData);
      localStorage.setItem("@MyAgenda:TOKEN", response.data.token);
      const responseUser = await getUser(response.data.token);
      setUser(responseUser);

      toast.success("Usuário logado com sucesso!", {
        autoClose: 1000,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      toast.error("Credenciais inválidas!", {
        autoClose: 1000,
      });
    }
  };

  const deleteUser = async (userId: number) => {
    const token = localStorage.getItem("@MyAgenda:TOKEN");

    await api.delete(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem("@MyAgenda:TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin, user, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
