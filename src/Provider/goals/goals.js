import { createContext, useState, useEffect, useContext } from "react";
import api from "../../Services/api";
import { LoginContext } from "../Login/Login";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);
  const { authorization } = useContext(LoginContext);

  useEffect(() => {
    showList(setGoalsList);
  }, [goalsList]);

  // const [token] = useState(localStorage.getItem("AuthToken") || "");

  const showList = (item, setList) => {
    api
      .get(`/goals/${item.id}`, {
        authorization,
      })
      .then((response) => {
        console.log(response);
        setList(response.results);
      });
  };

  console.log(goalsList);

  return (
    <GoalsContext.Provider value={{ setGoalsList, goalsList, showList }}>
      {children}
    </GoalsContext.Provider>
  );
};
