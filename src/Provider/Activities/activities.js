import { createContext, useState } from "react";
export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [level, setLevel] = useState("")

  return (
    <ActivitiesContext.Provider value={{ openModal, setOpenModal, level, setLevel}}>
      {children}
    </ActivitiesContext.Provider>
  );
};
