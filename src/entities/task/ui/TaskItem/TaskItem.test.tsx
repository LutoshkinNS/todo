import { screen } from "@testing-library/react";
import { componentRender } from "../../../../shared/libs/test/componentRender/componentRender";
import { TaskItem } from "./TaskItem";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

const handleChange = jest.fn();
const handleRemove = jest.fn();

describe("TaskItem", () => {
  test("Тест рендеринга", () => {
    componentRender(
      <TaskItem
        task={{
          id: 1,
          item: "item",
          completed: true,
        }}
        onChange={handleChange}
        onRemove={handleRemove}
      ></TaskItem>,
    );
    expect(screen.getByText("item")).toBeInTheDocument();
    expect(screen.getByTestId("CloseBtn")).toBeInTheDocument();
  });

  test("Изменение состояния чекбокса", async () => {
    const user = userEvent.setup();

    const Wrap = () => {
      const [isChecked, setIsChecked] = useState(true);
      return (
        <TaskItem
          task={{
            id: 1,
            item: "item",
            completed: isChecked,
          }}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          onRemove={handleRemove}
        />
      );
    };

    componentRender(<Wrap />);

    await user.click(screen.getByTestId("itemCheckbox"));
    expect(screen.getByTestId("itemCheckbox")).not.toBeChecked();
    await user.click(screen.getByTestId("itemCheckbox"));
    expect(screen.getByTestId("itemCheckbox")).toBeChecked();
  });
});
