import {
  PrincipalContainer,
  PrincipalHeader,
  PrincipalBody,
  Modules,
} from "./style";
import { BsClipboardPlus } from "react-icons/bs";
import Header from "../Header";
import Modal from "../Modal";
import { useState } from "react";

function Activies() {
const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Header backgroundColor={"var(--ligthblue)"} />
      <PrincipalContainer>
        <PrincipalHeader>
          <h2>Activies</h2>
          <button onClick={()=> setOpenModal(true)}>
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
       
      </PrincipalContainer>
      {openModal ? <Modal 

        title={"New Activity"}
        text={"How hard is it to keep this Goal?"}
      /> : null}
    </>
  );
}

export default Activies;
