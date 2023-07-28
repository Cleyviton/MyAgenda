import { useContext } from "react";
import { Modal } from "../Modal";
import { StyledForm } from "../Modal/styles";
import { UserContext } from "../../contexts/UserContext";
import { TUser } from "../../contexts/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../Modal/validator";

interface ModalProps {
  toggleModal: () => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditProfile = ({
  toggleModal,
  setIsOpenModal,
}: ModalProps) => {
  const { user, updateUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    resolver: zodResolver(schema),
  });

  return (
    <Modal toggleModal={toggleModal}>
      <StyledForm
        onSubmit={handleSubmit((data) => {
          updateUser(user!.id, data);
          setIsOpenModal(false);
        })}
      >
        <p>Editar perfil</p>
        <label htmlFor="name" className={errors.name && "error"}>
          * Nome:
        </label>
        <input
          type="text"
          id="name"
          className={errors.name && "error"}
          placeholder="Preencha o seu nome"
          defaultValue={user?.name}
          {...register("name")}
        />

        <label htmlFor="email" className={errors.email && "error"}>
          * Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          className={errors.email && "error"}
          placeholder="Preencha o seu email"
          defaultValue={user?.email}
          {...register("email")}
        />

        <label htmlFor="phone" className={errors.phone && "error"}>
          * Telefone:{" "}
        </label>
        <input
          type="text"
          id="phone"
          className={errors.phone && "error"}
          placeholder="Preencha o seu telefone"
          defaultValue={user?.phone}
          {...register("phone")}
        />

        <button>Salvar Alteração</button>
      </StyledForm>
    </Modal>
  );
};
