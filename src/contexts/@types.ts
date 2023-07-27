import { TLoginData } from "../components/Form/LoginForm/validator";
import { TRegisterData } from "../components/Form/RegisterForm/validator";

export type TUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
};

export type TContact = TUser;

export interface IProvidersProps {
  children: React.ReactNode;
}

export interface IUserContext {
  userRegister: (formData: TRegisterData) => Promise<void>;
  userLogin: (formData: TLoginData) => Promise<void>;
  user: TUser | null;
  deleteUser: (userId: number) => Promise<void>;
}

export interface IContactContext {
  contacts: [] | TContact[];
  deleteContact: (contactId: number) => Promise<void>;
}
