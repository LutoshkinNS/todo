import { screen } from "@testing-library/react";
import { Button } from "./Button";
import { componentRender } from "../../libs/test/componentRender/componentRender";

describe("Button", () => {
  test("Тест рендеринга", () => {
    componentRender(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
