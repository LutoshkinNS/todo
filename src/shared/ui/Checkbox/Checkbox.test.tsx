import { screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { componentRender } from "../../libs/test/componentRender/componentRender";

describe("Checkbox", () => {
  test("Тест рендеринга", () => {
    componentRender(<Checkbox label="test"></Checkbox>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
