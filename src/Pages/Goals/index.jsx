import Header from "../../Components/Header";
import Modal from "../../Components/ModalGoals/index";
import imgGoals from "../../assets/img/image-goals/Personal goals-amico 1.png";
import { GoalsContainer } from "./style";

const Goals = (setToggle) => {
  return (
    <>
      <Header backgroundColor={"var(--orange)"} />
      <GoalsContainer>
        <div className="modal-container">MODAL</div>
        <div className="img-container">
          <img src={imgGoals} alt="Goals" />
        </div>
      </GoalsContainer>
    </>
  );
};

export default Goals;
