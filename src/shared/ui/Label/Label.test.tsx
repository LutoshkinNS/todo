import { screen } from "@testing-library/react";
import { componentRender } from "../../libs/test/componentRender/componentRender";
import { Label } from "./Label";

describe("Label", () => {
  test("Тест рендеринга", () => {
    componentRender(<Label></Label>);
    expect(screen.getByTestId("label")).toBeInTheDocument();
  });

  test("Тест рендеринга с текстом", () => {
    componentRender(<Label>test</Label>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
