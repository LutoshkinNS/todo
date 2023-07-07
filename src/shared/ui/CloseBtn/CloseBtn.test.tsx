import { screen } from "@testing-library/react";
import { componentRender } from "../../libs/test/componentRender/componentRender";
import { CloseBtn } from "./CloseBtn";

describe("CloseBtn", () => {
  test("Тест рендеринга", () => {
    componentRender(
      <CloseBtn
        onClick={() => {
          return true;
        }}
      ></CloseBtn>,
    );
    expect(screen.getByTestId("CloseBtn")).toBeInTheDocument();
  });
});
