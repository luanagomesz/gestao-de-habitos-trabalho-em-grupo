import Header from "../../Components/Header";
import { GoalsContainer } from "./style";
import ItemList from "../../Components/ItemList";
import { GoalsContext } from "../../Provider/goals/goals";
import { useContext, useEffect, useState } from "react";
import Button from "../../Components/Button/index";
import vector from "../../assets/img/image-goals/Vector 1.png";

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
        {toggle ? (
          <Button
            onClick={onClick}
            width={`${322}px`}
            // backgroundHover={backgroundHover}
            // width={"200px"}
            // margin={margin}
            // type={type}
          />
        ) : (
          <Button onClick={addGoal} />
        )}
      </GoalsContainer>
      <img src={vector} alt="goals-footer" />
    </>
  );
};

export default Goals;
