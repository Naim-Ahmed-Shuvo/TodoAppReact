import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
// import { Form } from "react-boostrap/Form";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);
const TodoForm = ({ setInputText, todos, setTodo, inputText }) => {
  const classes = useStyles();
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const todoSubmitHandler = (e) => {
    e.preventDefault();

    setTodo([
      ...todos,
      {
        text: inputText,
        copleted: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText(" ");
    console.log(todos);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          value={inputText}
          label="Todo"
          onChange={inputTextHandler}
        />

        <Button
          onClick={todoSubmitHandler}
          variant="contained"
          color="primary"
          size="small"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
