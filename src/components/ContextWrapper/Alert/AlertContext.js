import React, { useContext, useState } from 'react';

const AlertContext = React.createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [isAlertShow, setIsAlertShow] = useState(false);

  const toggle = () => {
    setIsAlertShow((prev) => !prev);
  };

  return (
    <AlertContext.Provider
      value={{
        visible: isAlertShow,
        toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
