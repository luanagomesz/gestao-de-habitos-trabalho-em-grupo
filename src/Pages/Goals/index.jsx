import Header from "../../Components/Header";
import Modal from "../../Components/ModalGoals/index";
import imgGoals from "../../assets/img/image-goals/Personal goals-amico 1.png";
import { GoalsContainer } from "./style";
import ItemList from "../../Components/ItemList";
import { GoalsContext } from "../../Provider/goals/goals";
import { useContext } from "react";
import { MdOutlineLteMobiledata } from "react-icons/md";

const Goals = (setToggle) => {
  const { goalsList } = useContext(GoalsContext);

  console.log(goalsList);
  return (
    <>
      <Header backgroundColor={"var(--orange)"} />
      <GoalsContainer>
        <ul>
          {goalsList.map((item) => (
            <ItemList
              key={item.id}
              color={"var(--orange)"}
              name={item.title}
              requirementTitle={"Status"}
              difficultyValue={item.difficulty}
              requirementValue={item.achieved}
            />
          ))}
        </ul>

        <div className="modal-container">MODAL</div>
        <div className="img-container">
          <img src={imgGoals} alt="Goals" />
        </div>
      </GoalsContainer>
    </>
  );
};

export default Goals;
