import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import HeaderContainer from "./styles";
import Rabbit from "../../assets/img/Habbit.png";

const Header = ({ backgroundColor }) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <div clasName="logo-container">
        <img src={Rabbit} alt="Habbit-logo" />
        <h1 className="Habbit">Habbit</h1>
      </div>
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
