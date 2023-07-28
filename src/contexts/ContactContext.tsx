import { createContext, useEffect, useState } from "react";
import { IContactContext, IProvidersProps, TContact } from "./@types";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  const createContact = async (data: TContact) => {
    const response = await api.post(`contacts/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Contato criado com sucesso!", {
      autoClose: 1000,
    });

    setContacts([...contacts, response.data]);
  };

  const updateContact = async (contactId: number, data: TContact) => {
    const response = await api.patch(`contacts/${contactId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Dados do contato atualizados com sucesso!", {
      autoClose: 1000,
    });

    const filterToRemove = contacts.filter(
      (contact) => contact.id != contactId
    );

    setContacts([...filterToRemove, response.data]);
  };

  const deleteContact = async (contactId: number) => {
    await api.delete(`contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Contato deletado com sucesso!", {
      autoClose: 1000,
    });

    const filterToRemove = contacts.filter(
      (contact) => contact.id != contactId
    );

    setContacts(filterToRemove);
  };

  return (
    <ContactContext.Provider
      value={{ contacts, createContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
