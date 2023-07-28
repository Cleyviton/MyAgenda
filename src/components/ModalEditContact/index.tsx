import { useContext } from "react";
import { TContact } from "../../contexts/@types";
import { Modal } from "../Modal";
import { StyledForm } from "../Modal/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../contexts/ContactContext";
import { schema } from "../Modal/validator";

interface ModalProps {
  toggleModal: () => void;
  contact: TContact;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditContact = ({
  toggleModal,
  contact,
  setIsOpenModal,
}: ModalProps) => {
  const { updateContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContact>({
    resolver: zodResolver(schema),
  });

  return (
    <Modal toggleModal={toggleModal}>
      <StyledForm
        onSubmit={handleSubmit((data) => {
          updateContact(contact.id, data);
          setIsOpenModal(false);
        })}
      >
        <p>Editar contato</p>
        <label htmlFor="name" className={errors.name && "error"}>
          * Nome:
        </label>
        <input
          type="text"
          id="name"
          className={errors.name && "error"}
          placeholder="Preencha o nome do contato"
          defaultValue={contact.name}
          {...register("name")}
        />

        <label htmlFor="email" className={errors.email && "error"}>
          * Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          className={errors.email && "error"}
          placeholder="Preencha o email do contato"
          defaultValue={contact.email}
          {...register("email")}
        />

        <label htmlFor="phone" className={errors.phone && "error"}>
          * Telefone:{" "}
        </label>
        <input
          type="text"
          id="phone"
          className={errors.phone && "error"}
          placeholder="Preencha o telefone do contato"
          defaultValue={contact.phone}
          {...register("phone")}
        />

        <button>Salvar Alteração</button>
      </StyledForm>
    </Modal>
  );
};
