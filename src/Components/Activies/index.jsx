import {
  PrincipalContainer,
  PrincipalHeader,
  PrincipalBody,
  Modules,
} from "./style";
import { BsClipboardPlus } from "react-icons/bs";
import Vetor from "../../assets/imgs/vetor.png";
import Header from "../Header";

function Activies() {
  return (
    <>
    <Header backgroundColor={"8782D6"} />
      <PrincipalContainer>
        <PrincipalHeader>
          <h2>Activies</h2>
          <button>
            <BsClipboardPlus />
          </button>
        </PrincipalHeader>

        <PrincipalBody>
          <Modules>
            <p>Activity #1</p>
            <div>
              <h4>Difficulty</h4>
              <h4>Relization Time</h4>
            </div>
          </Modules>
          <Modules>
            <p>Activity #2</p>
            <div>
              <h4>Difficulty</h4>
              <h4>Relization Time</h4>
            </div>
          </Modules>
          <Modules>
            <p>Activity #4</p>
            <div>
              <h4>Difficulty</h4>
              <h4>Relization Time</h4>
            </div>
          </Modules>
        </PrincipalBody>
        <img src={Vetor} alt="vetor" />
      </PrincipalContainer>
    </>
  );
}

export default Activies;
