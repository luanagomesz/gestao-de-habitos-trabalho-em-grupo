import { ModalContainer } from "./style";

const Modal = ({ title, text }) => {
  return (
    <ModalContainer>
      <div className="modal-header">
        <h1>{title}</h1>
        <span>img</span>
      </div>
      <input type="text" placeholder={title} />
      <p>How often?</p>
      <div className="frequency-container">
        <button className="frequency">Daily</button>
        <button className="frequency">Weekly</button>
        <button className="frequency">Monthly</button>
      </div>
      <p>{text}</p>
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
