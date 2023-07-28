import { ListContainer } from "./styles";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { useContext, useState } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { TContact } from "../../contexts/@types";
import { BsPersonFillAdd } from "react-icons/bs";
import { ModalCreateContact } from "../../components/ModalCreateContact";

export const Dashboard = () => {
  const { contacts } = useContext(ContactContext);
  const orderList: TContact[] = contacts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  const toggleModal = (
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => setState(!state);

  return (
    <>
      <Header />
      <ListContainer>
        {orderList.length == 0 ? (
          <div>
            <p>
              Você não possui contatos na sua agenda ainda, adicione clicando no
              ícone
            </p>
            <BsPersonFillAdd
              className="icon"
              onClick={() =>
                toggleModal(isOpenModalCreate, setIsOpenModalCreate)
              }
            />
          </div>
        ) : (
          orderList.map((contact: TContact) => (
            <Card key={contact.id} contact={contact} />
          ))
        )}
      </ListContainer>
      {isOpenModalCreate && (
        <ModalCreateContact
          toggleModal={() =>
            toggleModal(isOpenModalCreate, setIsOpenModalCreate)
          }
          setIsOpenModal={setIsOpenModalCreate}
        />
      )}
    </>
  );
};
