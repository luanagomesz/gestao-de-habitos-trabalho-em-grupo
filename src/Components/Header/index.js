import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import HeaderContainer from "./styles";
import Rabbit from "../../assets/img/Habbit.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Header = ({
  backgroundColor,
  page1,
  page2,
  page3,
  history1,
  history2,
  history3,
  user,
}) => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <div clasName="logo-container">
        <img src={Rabbit} alt="Habbit-logo" />
        <h1 className="Habbit">Habbit</h1>
      </div>

      <div className="pages-container">
        <button onClick={() => history.push(`/${history1}`)}>{page1}</button>
        <button onClick={() => history.push(`/${history2}`)}>{page2}</button>
        <button onClick={() => history.push(`/${history3}`)}>{page3}</button>
      </div>

      {userInfo ? (
        <div className="user-info">
          <p>Welcome, {user}!</p>
        </div>
      ) : (
        <></>
      )}

      <div>
        <button>
          <AiOutlineMenu />
        </button>
        <button>
          <MdOutlineExitToApp />
        </button>
        <button>
          <FaUserCircle />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
