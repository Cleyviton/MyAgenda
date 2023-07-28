import { useContext } from "react";
import { TContact } from "../../contexts/@types";
import { Modal } from "../Modal";
import { StyledModal } from "../Modal/styles";
import { ContactContext } from "../../contexts/ContactContext";

interface ModalProps {
  toggleModal: () => void;
  contact: TContact;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalDeleteContact = ({
  toggleModal,
  contact,
  setIsOpenModal,
}: ModalProps) => {
  const { deleteContact } = useContext(ContactContext);
  return (
    <Modal toggleModal={toggleModal}>
      <StyledModal>
        <p>Deseja mesmo deletar o contato de {contact.name}?</p>
        <button
          onClick={() => {
            deleteContact(contact.id);
            setIsOpenModal(false);
          }}
        >
          Confirmar
        </button>
      </StyledModal>
    </Modal>
  );
};
