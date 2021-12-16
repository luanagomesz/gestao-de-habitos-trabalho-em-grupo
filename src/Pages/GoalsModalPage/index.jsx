import imgGoals from "../../assets/img/image-goals/Personal goals-amico 1.png";
import Header from "../../Components/Header";
import Modal from "../../Components/ModalGoals";
import { GoalsModalPageContainer } from "./style";

const GoalsModalPage = ({ history }) => {
  return (
    <>
      <Header backgroundColor={"var(--orange)"} />
      <GoalsModalPageContainer>
        <Modal />
        <div className="img-container">
          <img src={imgGoals} alt="Goals" />
        </div>
      </GoalsModalPageContainer>
    </>
  );
};

export default GoalsModalPage;
