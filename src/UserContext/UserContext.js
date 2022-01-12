import { createContext } from "react";

export const context = {
  userid: "",
  password: "",
  lastname: "",
  firstname: "",
  role: "",
};

const UserContext = createContext({ context });

export default UserContext;
