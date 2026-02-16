import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export let UserContextVarible = createContext();

let ContextProvider = ({ children }) => {
  let [userData, setUserData] = useState([]);

  useEffect(() => {
    let fetchUserData = async () => {
      try {
        let userData = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUserData(userData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserContextVarible.Provider value={{ userData }}>
      {children}
    </UserContextVarible.Provider>
  );
};

export default ContextProvider;
