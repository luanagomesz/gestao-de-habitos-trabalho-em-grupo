import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import HeaderContainer from "./styles";
import Rabbit from "../../assets/img/Logo -img.png";

const Header = ({ backgroundColor }) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <span>
        <img src={Rabbit} alt="rabbit-logo" />
        <h1>Habbits</h1>
      </span>

      <div>
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
