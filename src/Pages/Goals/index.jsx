import Header from "../../Components/Header";
import Modal from "../../Components/Modal";
import { useContext } from "react";
import { GoalsContext } from "../../Provider/goals/goals";
import List from "../../Components/List";

const Goals = () => {
  const { goalsList, setGoalsList, showList } = useContext(GoalsContext);
  return (
    <>
      <Header backgroundColor={"var(--orange"} />
      <Modal />
      <List />
    </>
  );
};

export default Goals;
