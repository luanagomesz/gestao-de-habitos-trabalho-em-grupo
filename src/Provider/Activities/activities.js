import { createContext, useState } from "react";
export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ActivitiesContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
