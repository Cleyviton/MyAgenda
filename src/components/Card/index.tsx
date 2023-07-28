import { useState } from "react";
import { TContact } from "../../contexts/@types";
import { StyledCard } from "./styles";
import { ModalDeleteContact } from "../ModalDeleteContact";
import { ModalEditContact } from "../ModalEditContact";

interface CardProps {
  contact: TContact;
}

export const Card = ({ contact }: CardProps) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const toggleModal = (
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => setState(!state);
  return (
    <>
      {" "}
      <StyledCard>
        <p className="name">{contact.name}</p>
        <p className="email">{contact.email} </p>
        <p className="phone">
          {contact.phone.length == 11
            ? `(${contact.phone.slice(0, 2)}) ${contact.phone.slice(
                2,
                7
              )}-${contact.phone.slice(7)}`
            : contact.phone}
        </p>

        <div>
          <button
            className="btnEditar"
            onClick={() => toggleModal(isOpenModalEdit, setIsOpenModalEdit)}
          >
            Editar
          </button>
          <button
            className="btnExcluir"
            onClick={() => toggleModal(isOpenModalDelete, setIsOpenModalDelete)}
          >
            Excluir
          </button>
        </div>
      </StyledCard>
      {isOpenModalEdit && (
        <ModalEditContact
          toggleModal={() => toggleModal(isOpenModalEdit, setIsOpenModalEdit)}
          contact={contact}
          setIsOpenModal={setIsOpenModalEdit}
        />
      )}
      {isOpenModalDelete && (
        <ModalDeleteContact
          toggleModal={() =>
            toggleModal(isOpenModalDelete, setIsOpenModalDelete)
          }
          contact={contact}
          setIsOpenModal={setIsOpenModalDelete}
        />
      )}
    </>
  );
};
