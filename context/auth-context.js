import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  userModalIsShown: false,
  showUserModal: () => {},
  hideUserModal: () => {},
});

export const AuthContextProvider = (props) => {
  const [userModalIsShown, setUserModalIsShown] = useState(false);

  const onShowUserModal = () => {
    setUserModalIsShown(true);
  };

  const onHideUserModal = () => {
    setUserModalIsShown(false);
  };

  const contextValue = {
    userModalIsShown: userModalIsShown,
    showUserModal: onShowUserModal,
    hideUserModal: onHideUserModal,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
