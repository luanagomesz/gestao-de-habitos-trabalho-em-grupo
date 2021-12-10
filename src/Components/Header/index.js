import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import HeaderContainer from "./styles";

const Header = ({backgroundColor}) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <h1>Logo</h1>
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
