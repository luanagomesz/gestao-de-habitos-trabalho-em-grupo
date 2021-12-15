import { createContext, useState, useEffect, useContext } from "react";
import api from "../../Services/api";
import { LoginContext } from "../Login/Login";
import { GroupsContext } from "../../Provider/Groups/groups";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);
  const { authorization } = useContext(LoginContext);
  const { GroupId, groups } = useContext(GroupsContext);

  useEffect(() => {
    showList();
  }, []);

  // const [token] = useState(localStorage.getItem("AuthToken") || "");

  const showList = () => {
    api.get(`/goals/?group=${GroupId}`, "", authorization).then((response) => {
      setGoalsList(response.data.results);
    });
  };

  console.log(goalsList);

  return (
    <GoalsContext.Provider value={{ setGoalsList, goalsList, showList }}>
      {children}
    </GoalsContext.Provider>
  );
};
