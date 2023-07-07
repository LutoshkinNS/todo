import { screen } from "@testing-library/react";
import { componentRender } from "../../libs/test/componentRender/componentRender";
import { Title } from "./Title";

describe("Title", () => {
  test("Тест рендеринга", () => {
    componentRender(<Title tag="h1">test</Title>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("Проверка правильности рендеринга тэга", () => {
    componentRender(<Title tag="h2">test</Title>);
    const title = screen.getByText("test");
    expect(title.tagName.toLowerCase()).toBe("h2");
  });
});
