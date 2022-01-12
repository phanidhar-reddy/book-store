import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { HeaderComponent } from "../../Components/HeaderComponent";
import booksMethodMapper from "../../Redux/Actions/booksActions";
import UserContext from "../../UserContext/UserContext";
import _ from "lodash";

export const Header = (props) => {
  const dispatch = useDispatch();
  const { user, updateUser } = useContext(UserContext);
  const handleBooksFetch = async () => {
    await booksMethodMapper.getBooksDataAndUpdate(dispatch);
  };

  const logOut = () => {
    updateUser({
      userid: "",
      password: "",
      lastname: "",
      firstname: "",
      role: "",
    });
  };

  return (
    <div>
      <HeaderComponent
        hideAll={_.isEmpty(user.userid)}
        user={user}
        handleLogout={logOut}
        handleBooksFetch={handleBooksFetch}
      ></HeaderComponent>
    </div>
  );
};
