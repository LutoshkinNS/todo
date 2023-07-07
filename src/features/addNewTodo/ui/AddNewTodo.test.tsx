import { screen } from "@testing-library/react";
import { AddNewTodo } from "./AddNewTodo";
import { componentRender } from "../../../shared/libs/test/componentRender/componentRender";
import userEvent from "@testing-library/user-event";

const addTask = jest.fn();

describe("AddNewTodo", () => {
  test("Тест рендеринга", () => {
    componentRender(<AddNewTodo addTask={addTask} />);
    expect(screen.getByTestId("addTaskForm")).toBeInTheDocument();
  });

  test("Добавление задачи с содержимым в инпуте", async () => {
    const user = userEvent.setup();

    let countTasks = 2;

    const Wrap = () => {
      return (
        <AddNewTodo
          addTask={() => {
            countTasks++;
          }}
        />
      );
    };

    componentRender(<Wrap />);

    await user.type(screen.getByTestId("addTaskInput"), "test task");
    expect(screen.getByTestId("addTaskInput")).toHaveDisplayValue("test task");

    await user.click(screen.getByTestId("addTaskButton"));
    expect(countTasks).toBe(3);

    await user.clear(screen.getByTestId("addTaskInput"));
    expect(screen.getByTestId("addTaskInput")).toHaveDisplayValue("");
  });

  test("Добавление задачи с пустым инпутом", async () => {
    const user = userEvent.setup();

    let countTasks = 2;

    const Wrap = () => {
      return (
        <AddNewTodo
          addTask={() => {
            countTasks++;
          }}
        />
      );
    };

    componentRender(<Wrap />);

    await user.type(screen.getByTestId("addTaskInput"), " ");
    const input = screen.getByTestId("addTaskInput") as HTMLInputElement;
    expect(input.value.trim()).toBe("");

    await user.click(screen.getByTestId("addTaskButton"));
    expect(countTasks).toBe(2);
  });
});
