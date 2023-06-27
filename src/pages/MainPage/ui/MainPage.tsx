import React, { ChangeEvent, useCallback } from "react";
import { memo } from "react";
import { Task, TaskItem } from "../../../entities/task";
import { AddNewTodo } from "../../../features/addNewTodo";
import { TasksAll } from "../../../entities/tasksAll";
import {
  countCompletedTasks,
  get,
  toggleAllStatusCompleted,
  toggleStatusCompleted,
} from "../model/model";
import { Container } from "../../../shared/ui/Container";
import * as S from "./styles";
import { Title } from "../../../shared/ui/Title";
import { TaskList } from "../../../entities/task";

export const MainPage = memo(() => {
  const [state, setState] = React.useState(get());

  const handleChangeTaskItem = useCallback((task: Task) => {
    setState((state) => toggleStatusCompleted(state, task));
  }, []);

  const handleRemoveTaskItem = useCallback((task: Task) => {
    setState((state) => state.filter((i) => i.id !== task.id));
  }, []);

  const handleChangeTaskAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setState((state) => toggleAllStatusCompleted(state, true));
    } else {
      setState((state) => toggleAllStatusCompleted(state, false));
    }
  };

  const addTask = useCallback((newTask: Task) => {
    setState((state) => [...state, newTask]);
  }, []);

  return (
    <Container>
      <S.MainPage>
        <Title align="left">Fixed todo list</Title>
        <AddNewTodo addTask={addTask} />
        <TasksAll
          onChange={handleChangeTaskAll}
          countAllTasks={state.length}
          countCheckedTasks={countCompletedTasks(state)}
        />
        <TaskList>
          {state.map((item) => {
            return (
              <TaskItem
                key={item.id}
                onChange={handleChangeTaskItem}
                onRemove={handleRemoveTaskItem}
                task={item}
              />
            );
          })}
        </TaskList>
      </S.MainPage>
    </Container>
  );
});
