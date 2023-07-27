import { createContext, useEffect, useState } from "react";
import { IContactContext, IProvidersProps, TContact } from "./@types";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IProvidersProps) => {
  const [contacts, setContacts] = useState<TContact[] | []>([]);
  const token = localStorage.getItem("@MyAgenda:TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!token) {
        navigate("/");
      }

      const response = await api.get("contacts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts(response.data);
    })();
  }, []);

  const deleteContact = async (contactId: number) => {
    await api.delete(`contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const filterToRemove = contacts.filter(
      (contact) => contact.id != contactId
    );

    setContacts(filterToRemove);
  };

  return (
    <ContactContext.Provider value={{ contacts, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
