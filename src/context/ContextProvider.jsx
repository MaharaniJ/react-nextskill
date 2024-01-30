import { createContext, useState } from "react";

export const LoginContext = createContext(null);
import PropTypes from "prop-types";

export const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  console.log("contextProviderconsole:",account);


  ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <LoginContext.Provider value={{ account, setAccount }}>
      {children}
    </LoginContext.Provider>
  );
};
