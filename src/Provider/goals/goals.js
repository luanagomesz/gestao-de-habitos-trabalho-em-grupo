import { createContext, useState, useEffect, useContext } from "react";
import api from "../../Services/api";
import { LoginContext } from "../Login/Login";
import { GroupsContext } from "../../Provider/Groups/groups";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);
  const { authorization } = useContext(LoginContext);
  const [goalsControl, setGoalsControl] = useState(false);
  const { GroupId } = useContext(GroupsContext);

  const showList = () => {
    api.get(`/goals/?group=${GroupId}`, "", authorization).then((response) => {
      setGoalsList(response.data.results);
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    showList();
    // eslint-disable-next-line
  }, [authorization]);

  useEffect(() => {
    showList();
    // eslint-disable-next-line
  }, [goalsControl]);


  return (
    <GoalsContext.Provider value={{ setGoalsList, goalsList, showList, goalsControl, setGoalsControl }}>
      {children}
    </GoalsContext.Provider>
  );
};
