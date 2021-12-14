import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    showList(setGoalsList);
  }, [goalsList]);

  const [token] = useState(localStorage.getItem("AuthToken") || "");

  const showList = (item, setList) => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/goals/${item.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setList(response);
      });
  };

  return (
    <GoalsContext.Provider value={{ setGoalsList, goalsList, showList }}>
      {children}
    </GoalsContext.Provider>
  );
};
