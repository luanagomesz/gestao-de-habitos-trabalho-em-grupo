import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import HeaderContainer from "./styles";
import Rabbit from "../../assets/img/Habbit.png";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../../Provider/Login/Login";
import MenuMobile from "../HeaderMobileMenu";
const Header = ({
  backgroundColor,
  page1,
  page2,
  page3,
  history1,
  history2,
  history3,
}) => {
  const { username, clearLocalStorage } = useContext(LoginContext);
  const [menu, setMenu] = useState(false);
  const history = useHistory();

  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <div className="logo-container">
        <img src={Rabbit} alt="Habbit-logo" />
        <h1 className="Habbit">Habbit</h1>
      </div>
      <div className="pages-container">
        <button onClick={() => history.push(`/${history1}`)}>{page1}</button>
        <button onClick={() => history.push(`/${history2}`)}>{page2}</button>
        <button onClick={() => history.push(`/${history3}`)}>{page3}</button>
        <p className="username">Welcome, {username}!</p>
      </div>

      <div className="icons">
        <button>
          <FaUserCircle />
        </button>
        <button className="menuMobile">
          <AiOutlineMenu
            onClick={() => {
              if (menu === true) {
                setMenu(false);
              } else {
                setMenu(true);
              }
            }}
          />
        </button>
        {menu === true ? (
          <MenuMobile
            page1={page1}
            page2={page2}
            page3={page3}
            history1={history1}
            history2={history2}
            history3={history3}
            backgroundColor={backgroundColor}
          ></MenuMobile>
        ) : (
          ""
        )}
        <button>
          <MdOutlineExitToApp
            onClick={() => {
              clearLocalStorage();
              history.push("/");
            }}
          />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
