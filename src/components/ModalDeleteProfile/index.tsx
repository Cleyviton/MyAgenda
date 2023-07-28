import { useContext } from "react";
import { Modal } from "../Modal";
import { StyledModal } from "../Modal/styles";
import { UserContext } from "../../contexts/UserContext";

interface ModalProps {
  toggleModal: () => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalDeleteProfile = ({
  toggleModal,
  setIsOpenModal,
}: ModalProps) => {
  const { user, deleteUser } = useContext(UserContext);
  return (
    <Modal toggleModal={toggleModal}>
      <StyledModal>
        <p>{user?.name} você deseja mesmo deletar o seu perfil?</p>
        <button
          onClick={() => {
            deleteUser(user!.id);
            setIsOpenModal(false);
          }}
        >
          Confirmar
        </button>
      </StyledModal>
    </Modal>
  );
};
