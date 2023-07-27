import { ListContainer } from "./styles";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { TContact } from "../../contexts/@types";

export const Dashboard = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <>
      <Header />
      <ListContainer>
        {contacts.map((contact: TContact) => (
          <Card key={contact.id} contact={contact} />
        ))}
      </ListContainer>
    </>
  );
};
