import { screen } from "@testing-library/react";
import { componentRender } from "../../libs/test/componentRender/componentRender";
import { TextField } from "./TextField";

describe("TextField", () => {
  test("Тест рендеринга", () => {
    componentRender(<TextField id="textField" label="test"></TextField>);
    expect(screen.getByLabelText("test")).toBeInTheDocument();
  });
});
