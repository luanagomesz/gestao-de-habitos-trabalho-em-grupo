import { ModalContainer } from "./style";
import { MdOutlineExitToApp } from "react-icons/md";

//usar o yup resolver para substituir o uso de states
//passar o valor da category por props
//passar uma props sinalizando o tipo do modal

const Modal = ({ title, text, /* type */ }) => {
  return (
    /* {type === "habits" ? <ModalHabits></ModalHabits> : <ModalGoals></ModalGoals> */
    <ModalContainer>
      <div className="modal-header">
        <h1>{title}</h1>
        <span>
          <MdOutlineExitToApp />
        </span>
      </div>
      <input type="text" placeholder={title} />
      <p>How often?</p>
      {/* essa  div será substituída pelo componente Button da branch components */}
      <div className="frequency-container">
        <button className="frequency">Daily</button>
        <button className="frequency">Weekly</button>
        <button className="frequency">Monthly</button>
      </div>
      <p>{text}</p>
      {/* essa  div será substituída pelo componente Button da branch components */}
      <div className="frequency-container">
        <button className="frequency">Easy</button>
        <button className="frequency">Hard</button>
        <button className="frequency">Very Hard</button>
      </div>
      <button className="add">Add</button>
    </ModalContainer>
  );
};

export default Modal;
