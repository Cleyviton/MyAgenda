import { FaTrash, FaUserCircle } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiSolidEditAlt } from "react-icons/bi";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { StyledHeader } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalDeleteProfile } from "../ModalDeleteProfile";
import { ModalCreateContact } from "../ModalCreateContact";
import { ModalEditProfile } from "../ModalEditProfile";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const { user, userLogout } = useContext(UserContext);

  const toggleModal = (
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => setState(!state);

  return (
    <>
      <StyledHeader>
        <div className="container">
          <div>
            <FaUserCircle className="profile" fontSize="6rem" />
            <div>
              <p> {user?.name} </p>
              <span> {user?.email} </span>
              <span>
                {user?.phone.length == 11
                  ? `(${user?.phone.slice(0, 2)}) ${user?.phone.slice(
                      2,
                      7
                    )}-${user?.phone.slice(7)}`
                  : user?.phone}
              </span>
            </div>
          </div>
          <div className="box--icons">
            <FiSettings
              className="hamburguer iconBtn"
              fontSize="2rem"
              onClick={() => setShowMenu(!showMenu)}
            />
            <BiSolidEditAlt
              fontSize="2rem"
              className={showMenu ? "iconBtn" : "iconBtn hidden"}
              onClick={() => toggleModal(isOpenModalEdit, setIsOpenModalEdit)}
            />
            <BsPersonFillAdd
              fontSize="2rem"
              className={showMenu ? "iconBtn" : "iconBtn hidden"}
              onClick={() =>
                toggleModal(isOpenModalCreate, setIsOpenModalCreate)
              }
            />
            <FaTrash
              fontSize="2rem"
              className={showMenu ? "iconBtn delete" : "iconBtn delete hidden"}
              onClick={() =>
                toggleModal(isOpenModalDelete, setIsOpenModalDelete)
              }
            />
            <FiLogOut
              fontSize="2rem"
              className={showMenu ? "iconBtn" : "iconBtn hidden"}
              onClick={() => userLogout()}
            />
          </div>
        </div>
      </StyledHeader>
      {isOpenModalEdit && (
        <ModalEditProfile
          toggleModal={() => toggleModal(isOpenModalEdit, setIsOpenModalEdit)}
          setIsOpenModal={setIsOpenModalEdit}
        />
      )}
      {isOpenModalCreate && (
        <ModalCreateContact
          toggleModal={() =>
            toggleModal(isOpenModalCreate, setIsOpenModalCreate)
          }
          setIsOpenModal={setIsOpenModalCreate}
        />
      )}
      {isOpenModalDelete && (
        <ModalDeleteProfile
          toggleModal={() =>
            toggleModal(isOpenModalDelete, setIsOpenModalDelete)
          }
          setIsOpenModal={setIsOpenModalDelete}
        />
      )}
    </>
  );
};
