import Header from "../../Components/Header";
import Modal from "../../Components/Modal";
import { useContext } from "react";
import { GoalsContext } from "../../Provider/goals/goals";
import List from "../../Components/List";

function Goals({ history }) {
  const { goalsList, setGoalsList, showList } = useContext(GoalsContext);
  return (
    <div>
      <Header backgroundColor={"var(--orange)"} />
      <List />
      <Modal />
    </div>
  );
}

export default Goals;
