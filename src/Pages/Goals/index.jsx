import Header from "../../Components/Header";
/* import Modal from "../../Components/Modal"; */
import { useContext } from "react";

const Goals = () => {
  const { goalsList, setGoalsList, showList } = useContext();
  return (
    <>
      <Header backgroundColor={"var(--orange"} />
      {/* <Modal /> */}
    </>
  );
};

export default Goals;
