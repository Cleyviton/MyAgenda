import { TLoginData } from "../components/Form/LoginForm/validator";
import { TRegisterData } from "../components/Form/RegisterForm/validator";

export type TUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
};
export type TUserRequest = Omit<TUser, "id" | "registrationDate">;

export type TContact = TUser;

export interface IProvidersProps {
  children: React.ReactNode;
}

export interface IUserContext {
  userRegister: (formData: TRegisterData) => Promise<void>;
  userLogin: (formData: TLoginData) => Promise<void>;
  userLogout: () => void;
  user: TUser | null;
  updateUser: (userId: number, data: TUserRequest) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
}

export interface IContactContext {
  contacts: [] | TContact[];
  createContact: (data: TContact) => Promise<void>;
  updateContact: (contactId: number, data: TContact) => Promise<void>;
  deleteContact: (contactId: number) => Promise<void>;
}
