import Header from "../../Components/Header";
import { GoalsContainer } from "./style";
import ItemList from "../../Components/ItemList";
import { GoalsContext } from "../../Provider/goals/goals";
import { useContext, useEffect, useState } from "react";
import vector from "../../assets/img/image-goals/Vector 1.png";
import Modal from "../../Components/ModalGoals/index";
import goalsImg from "../../assets/img/image-goals/Personal goals-amico 1.png";

const Goals = ({ history }) => {
  const { goalsList } = useContext(GoalsContext);
  const [toggle, setToggle] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  useEffect(() => {
    if (width > 900) {
      setToggleModal(true);
    } else {
      setToggleModal(false);
    }
  }, [width]);

  const addGoal = () => {
    setToggleModal(true);
  };

  return (
    <>
      <Header
        backgroundColor={"var(--orange)"}
        page1={"Habits"}
        page2={"Dashboard"}
        page3={"Groups"}
        history1={"habits"}
        history2={"dashboard"}
        history3={"groups"}
      />
      <GoalsContainer>
        {toggleModal && (
          <div className="modal-container">
            <Modal />
          </div>
        )}
        {toggle && (
          <div className="list-container">
            <h1>Goals</h1>
            <ul>
              {goalsList.map((item) => (
                <ItemList
                  key={item.id}
                  color={"var(--red)"}
                  name={item.title}
                  requirementTitle={"Status"}
                  difficultyValue={item.difficulty}
                  requirementValue={item.achieved}
                />
              ))}
            </ul>
            <button className="btn-add" onClick={addGoal}>
              Add New Goal
            </button>
            <div className="img-container">
              <img src={goalsImg} alt="goals" />
            </div>
          </div>
        )}
      </GoalsContainer>
    </>
  );
};

export default Goals;
