import React, { useState } from "react";
import UserContext, { context } from "./UserContext";

const UserContextProvider = (props) => {
  const [user, updateUser] = useState(context);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
