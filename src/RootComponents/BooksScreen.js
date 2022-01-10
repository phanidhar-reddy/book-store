import { Box, Grid, ImageList, List } from "@mui/material";
import React, { useEffect } from "react";
import BookTile from "../Components/BookTile";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

export const BooksScreen = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const getBooksTileConversion = () => {
    if (_.isEmpty(books)) {
      return <div> No Books Available </div>;
    }

    return _.map(books, (book, id) => {
      if (undefined != book.imageLinks) {
        return <BookTile key={book.name + ":" + id} {...book}></BookTile>;
      } else {
        return <></>;
      }
    });
  };

  return (
    <Grid>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {getBooksTileConversion()}
      </Box>
    </Grid>
  );
};
