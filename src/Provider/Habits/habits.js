import { createContext, useState, useContext, useEffect } from "react";
import { LoginContext } from "../Login/Login";
import api from "../../Services/api";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {

  const { authorization } = useContext(LoginContext);
  const [ habitsControl, setHabitsControl ] = useState(false)
  const [habitsList, setHabitsList] = useState([]);

  const showHabits = () => {
    api
      .get("/habits/personal/", authorization)
      .then((response) => {
        setHabitsList(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showHabits();
    // eslint-disable-next-line
  }, [authorization]);

  useEffect(() => {
    showHabits();
    // eslint-disable-next-line
  }, [habitsControl]);

  return (
    <HabitsContext.Provider
      value={{
        habitsList,
        setHabitsList,
        habitsControl,
        setHabitsControl
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
}
