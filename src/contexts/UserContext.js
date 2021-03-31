import { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = (props) => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  // LOGIN WITH A TOKEN
  const login = (email, password) => {
    fetch("http://this-is-where-the-POST-endpoint-with-token-should-be", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}`,
    })
      .then((response) => response.json())
      .then((result) => {
        sessionStorage.setItem("token", result.token);
        setToken(result.token);
      })
      .catch((err) => {
        console.error(err.status);
      });
  };

  return (
    <UserContext.Provider value={{ login, token }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;