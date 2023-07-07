import { screen } from "@testing-library/react";
import { componentRender } from "../../libs/test/componentRender/componentRender";
import { Container } from "./Container";

describe("Container", () => {
  test("Тест рендеринга", () => {
    componentRender(
      <Container>
        <div></div>
      </Container>,
    );
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });
});
