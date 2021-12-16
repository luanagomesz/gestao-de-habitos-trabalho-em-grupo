import { createContext, useState } from "react";
export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [activity, setActivity] = useState([]);
  
  const [results] = useState(JSON.parse(localStorage.getItem("authToken:results")));

  return (
    <ActivitiesContext.Provider
      value={{
        activity,
        setActivity,
        openModal,
        setOpenModal,
        results
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
