import imgGoals from "../../assets/img/image-goals/Personal goals-amico 1.png";
import Header from "../../Components/Header";
import Modal from "../../Components/ModalGoals";
import { GoalsModalPageContainer } from "./style";
import vector from "../../assets/img/image-goals/Vector 1.png";

const GoalsModalPage = ({ history }) => {
  return (
    <>
      <Header backgroundColor={"var(--orange)"} />
      <div className="modal-container">
        <Modal />
      </div>

      <GoalsModalPageContainer>
        <img className="goals-img" src={imgGoals} alt="goals" />
        <img className="goals-footer" src={vector} alt="goals-footer" />
      </GoalsModalPageContainer>
    </>
  );
};

export default GoalsModalPage;
