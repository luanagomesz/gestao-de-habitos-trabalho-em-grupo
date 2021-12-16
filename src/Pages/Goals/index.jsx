import Header from "../../Components/Header";
import { GoalsContainer } from "./style";
import ItemList from "../../Components/ItemList";
import { GoalsContext } from "../../Provider/goals/goals";
import { useContext, useEffect, useState } from "react";
import Button from "../../Components/Button/index";
import vector from "../../assets/img/image-goals/Vector 1.png";
import Modal from "../../Components/ModalGoals/index";

const Goals = ({ history }) => {
  const { goalsList } = useContext(GoalsContext);
  const [toggle, setToggle] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  useEffect(() => {
    if (width > 900) {
      console.log(width);
      setToggleModal(true);
    } else {
      setToggleModal(false);
      console.log(width);
    }
  }, [width]);

  const addGoal = () => {
    setToggleModal(true);
  };

  return (
    <>
      <Header backgroundColor={"var(--orange)"} />
      <GoalsContainer>
        <h1>Goals</h1>
        {toggleModal && (
          <>
            <Modal />
          </>
        )}
        {toggle && (
          <div className="list-container">
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
          </div>
        )}

        <button onClick={addGoal}>teste</button>
      </GoalsContainer>
    </>
  );
};

export default Goals;
