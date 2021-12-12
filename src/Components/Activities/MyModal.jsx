import { ButtonAdd, ModalContainer } from "./MyModal.Style";
import { MdOutlineExitToApp } from "react-icons/md";
import Button from "../Button";

const MyModal = () => {
  return (
    <ModalContainer>
      <div className="modal-header">
        <h1>title</h1>
        <button>
          <MdOutlineExitToApp />
        </button>
      </div>
      <input type="text" placeholder="title" />

      <p>text</p>
      <input type="date" />
      {/* essa  div será substituída pelo componente Button da branch components */}
      <div className="frequency-container">
        <Button background={"var(--purple)"}>Easy</Button>
        <Button background={"var(--purple)"}>Hard</Button>
        <Button background={"var(--purple)"}>Very Hard</Button>
      </div>
      <ButtonAdd>
        <Button background={"var(--purple)"} width={"230px"}>
          Add
        </Button>
      </ButtonAdd>
    </ModalContainer>
  );
};

export default MyModal;
