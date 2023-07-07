import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "../../../shared/libs/test/componentRender/componentRender";
import { MainPage } from "./MainPage";
import { get } from "../model/model";
import userEvent from "@testing-library/user-event";

describe("Title", () => {
  test("Тест рендеринга", () => {
    componentRender(<MainPage />);
    expect(screen.getByTestId("mainPage")).toBeInTheDocument();
    expect(screen.getByTestId("mainPageTitle")).toBeInTheDocument();
    expect(screen.getByTestId("addTaskForm")).toBeInTheDocument();
    expect(screen.getByTestId("TaskList")).toBeInTheDocument();
  });

  test("Проверка на наличие задач", () => {
    const state = get();

    const { getAllByTestId } = componentRender(<MainPage />);
    const todosItems = getAllByTestId("TaskItem").map(
      (item) => item.textContent,
    );
    const stateItems = state.map((item) => item.item + "x");

    expect(todosItems).toEqual(stateItems);
  });

  test("Удаление задачи", async () => {
    const user = userEvent.setup();
    const { getAllByTestId } = componentRender(<MainPage />);
    const countTasks = getAllByTestId("TaskItem").length;

    await user.click(getAllByTestId("CloseBtn")[0]);
    expect(countTasks - 1).toBe(getAllByTestId("TaskItem").length);
  });

  test("Удаление всех задач", () => {
    const { getAllByTestId } = componentRender(<MainPage />);
    getAllByTestId("CloseBtn").forEach((closeBtn) => {
      fireEvent.click(closeBtn);
    });
    expect(screen.queryAllByTestId("TaskItem").length).toBe(0);
  });

  test("Добавление задачи", async () => {
    const user = userEvent.setup();
    const { getAllByTestId } = componentRender(<MainPage />);
    const countTasks = getAllByTestId("TaskItem").length;

    await user.click(getAllByTestId("CloseBtn")[0]);
    expect(countTasks - 1).toBe(getAllByTestId("TaskItem").length);
  });
});
