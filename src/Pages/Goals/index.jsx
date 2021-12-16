import Header from "../../Components/Header";
import Modal from "../../Components/ModalGoals/index";
import { GoalsContainer } from "./style";
import ItemList from "../../Components/ItemList";
import { GoalsContext } from "../../Provider/goals/goals";
import { useContext, useEffect, useState } from "react";
import { MdOutlineLteMobiledata } from "react-icons/md";
import Button from "../../Components/Button/index";
import { useHistory } from "react-router-dom";

const Goals = ({ history }) => {
  const { goalsList } = useContext(GoalsContext);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 900) {
      setToggle(false);
    }
  });
  // const history = useHistory();

  const onClick = () => {
    history.push("/goals/modal");
  };

  const addGoal = () => {
    console.log("add");
  };

  return (
    <>
      <Header backgroundColor={"var(--orange)"} />
      <GoalsContainer>
        <h1>Goals</h1>
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
        {toggle ? <Button onClick={onClick} /> : <Button onClick={addGoal} />}
      </GoalsContainer>
    </>
  );
};

export default Goals;
