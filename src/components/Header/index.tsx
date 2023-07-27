import { FaTrash, FaUserCircle } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiSolidEditAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { StyledHeader } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalDeleteProfile } from "../ModalDeleteProfile";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const { user } = useContext(UserContext);

  const toggleModal = (
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => setState(!state);

  return (
    <>
      <StyledHeader>
        <div className="container">
          <div>
            <FaUserCircle className="profile" fontSize="5rem" />
            <div>
              <p> {user?.name} </p>
              <span> {user?.email} </span>
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
            />
            <BsPersonFillAdd
              fontSize="2rem"
              className={showMenu ? "iconBtn" : "iconBtn hidden"}
            />
            <FaTrash
              fontSize="2rem"
              className={showMenu ? "iconBtn delete" : "iconBtn delete hidden"}
              onClick={() =>
                toggleModal(isOpenModalDelete, setIsOpenModalDelete)
              }
            />
          </div>
        </div>
      </StyledHeader>
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
