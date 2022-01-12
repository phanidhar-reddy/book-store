import React from "react";
import _ from "lodash";
import { Box, TextField } from "@mui/material";

const BoxComponent = (props) => {
  const getBoxComponent = () => {
    if (_.size(props.names) > 1) {
      return getDualLables();
    }

    return getSingleComponent();
  };

  const generateFields = (id) => {
    let field = (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id={props.ids[id]}
        label={props.names[id]}
        name={props.ids[id]}
        onChange={props.changeFunction[id]}
        disabled={props.disabled[id]}
        value={props.values[id]}
        type={props.types[id]}
        autoFocus
      />
    );

    if (props.types[id] === "date") {
      field = (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id={props.ids[id]}
          label={props.names[id]}
          name={props.ids[id]}
          onChange={props.changeFunction[id]}
          disabled={props.disabled[id]}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={props.values[id]}
          type={props.types[id]}
          autoFocus
        />
      );
    }

    return field;
  };

  const getDualLables = () => {
    return (
      <Box display="flex">
        {_.map(props.names, (name, id) => {
          return (
            <Box mr={1} key={name}>
              {generateFields(id)}
            </Box>
          );
        })}
      </Box>
    );
  };

  const getSingleComponent = () => {
    return (
      <Box>
        <Box key={props.names[0]}>{generateFields(0)}</Box>
      </Box>
    );
  };

  return getBoxComponent();
};

export default BoxComponent;
