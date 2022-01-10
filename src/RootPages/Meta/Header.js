import React from "react";
import { useDispatch } from "react-redux";
import { HeaderComponent } from "../../Components/HeaderComponent";
import booksMethodMapper from "../../Redux/Actions/booksActions";

export const Header = () => {
  const dispatch = useDispatch();

  const handleBooksFetch = async () => {
    await booksMethodMapper.getBooksDataAndUpdate(dispatch);
  };

  return (
    <div>
      <HeaderComponent handleBooksFetch={handleBooksFetch}></HeaderComponent>
    </div>
  );
};
