import { createContext, useState, useEffect, useContext } from "react";
import api from "../../Services/api";
import { LoginContext } from "../Login/Login";
import { GroupsContext } from "../../Provider/Groups/groups";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);
  const { authorization } = useContext(LoginContext);
  const { GroupId } = useContext(GroupsContext);

  useEffect(() => {
    showList();
  }, []);

  const showList = () => {
    api.get(`/goals/?group=${GroupId}`, "", authorization).then((response) => {
      console.log(response);
      setGoalsList(response.data.results);
    });
  };

  return (
    <GoalsContext.Provider value={{ setGoalsList, goalsList, showList }}>
      {children}
    </GoalsContext.Provider>
  );
};
