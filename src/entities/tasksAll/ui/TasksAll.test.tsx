import { screen } from "@testing-library/react";
import { componentRender } from "../../../shared/libs/test/componentRender/componentRender";
import {TasksAll} from "./TasksAll";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();

describe("TasksAll", () => {
  test("Тест рендеринга", () => {
    componentRender(
      <TasksAll
        onChange={onChange}
        countCheckedTasks={1}
        countAllTasks={3}
      />,
    );
    expect(screen.getByTestId("tasksAll")).toBeInTheDocument();
  });

  test("Все задачи выбраны", () => {
    componentRender(
        <TasksAll
            onChange={onChange}
            countCheckedTasks={3}
            countAllTasks={3}
        />,
    );
    const checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    const label = screen.getByTestId("label") as HTMLLabelElement
    expect(checkboxAll).toBeInTheDocument();
    expect(label.textContent).toBe(`Completed 3 of 3`);
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(true);
  });

  test("Выбрана часть задач", () => {
    componentRender(
        <TasksAll
            onChange={onChange}
            countCheckedTasks={1}
            countAllTasks={3}
        />,
    );
    const checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    const label = screen.getByTestId("label") as HTMLLabelElement
    expect(checkboxAll).toBeInTheDocument();
    expect(label.textContent).toBe(`Completed 1 of 3`);
    expect(checkboxAll.indeterminate).toBe(true);
    expect(checkboxAll.checked).toBe(false);
  });

  test("Ни одной задачи не выбрано", () => {
    componentRender(
        <TasksAll
            onChange={onChange}
            countCheckedTasks={0}
            countAllTasks={3}
        />,
    );
    const checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    const label = screen.getByTestId("label") as HTMLLabelElement
    expect(checkboxAll).toBeInTheDocument();
    expect(label.textContent).toBe(`Completed 0 of 3`);
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(false);
  });

  test("Нет задач", () => {
    componentRender(
        <TasksAll
            onChange={onChange}
            countCheckedTasks={0}
            countAllTasks={0}
        />,
    );
    const checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    const label = screen.getByTestId("label") as HTMLLabelElement
    expect(checkboxAll).toBeInTheDocument();
    expect(label.textContent).toBe(`Completed 0 of 0`);
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(false);
  });

  test("Нажатие на checkbox когда выбрана часть задач", async () => {
    const user = userEvent.setup()
    componentRender(
        <TasksAll
            onChange={onChange}
            countCheckedTasks={1}
            countAllTasks={3}
        />,
    );
    let checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    expect(checkboxAll).toBeInTheDocument();
    expect(checkboxAll.indeterminate).toBe(true);
    expect(checkboxAll.checked).toBe(false);

    await user.click(screen.getByTestId("tasksAll"))
    checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(true);

    await user.click(screen.getByTestId("tasksAll"))
    checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(false);
  });

  test("Нажатие на checkbox когда не выбрано задач", async () => {
    const user = userEvent.setup()
    componentRender(
        <TasksAll
            onChange={onChange}
            countCheckedTasks={0}
            countAllTasks={3}
        />,
    );
    let checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    expect(checkboxAll).toBeInTheDocument();
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(false);

    await user.click(screen.getByTestId("tasksAll"))
    checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(true);

    await user.click(screen.getByTestId("tasksAll"))
    checkboxAll = screen.getByTestId("tasksAll") as HTMLInputElement
    expect(checkboxAll.indeterminate).toBe(false);
    expect(checkboxAll.checked).toBe(false);
  });
});
