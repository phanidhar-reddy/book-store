import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import _ from "lodash";

const BookTile = (props) => {
  return (
    <Card key={props.imageLinks.thumbnail}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageLinks.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            written by: {_.join(props.authors, ",")} has pages :{" "}
            {props.pageCount}
            <Typography>
              <Rating
                name="read-only"
                value={
                  !_.isUndefined(props.averageRating) ? props.averageRating : 2
                }
                readOnly
              ></Rating>
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookTile;
