import React, { ChangeEvent, FormEvent, memo, useCallback } from "react";
import { TextField } from "../../../shared/ui/TextField";
import { Button } from "../../../shared/ui/Button";
import { Task } from "../../../entities/task";
import * as S from "./styles";

interface AddNewTodoProps {
  addTask: (task: Task) => void;
}

export const AddNewTodo = memo((props: AddNewTodoProps) => {
  const { addTask } = props;
  const [stateText, setStateText] = React.useState("");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
      e.preventDefault();
      if (stateText.trim() !== "") {
        addTask({
          id: new Date().getTime(),
          item: stateText,
          completed: false,
        });
        setStateText("");
      }
    },
    [addTask, stateText],
  );

  const handleChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setStateText(e.target.value);
  }, []);

  return (
    <S.Form onSubmit={onSubmit} autoComplete="off">
      <S.Row>
        <TextField
          name="newTask"
          id="textTask"
          onChange={handleChangeText}
          value={stateText}
          label="add todo"
        />
      </S.Row>
      <S.Row>
        <Button type="submit">Add</Button>
      </S.Row>
    </S.Form>
  );
});
