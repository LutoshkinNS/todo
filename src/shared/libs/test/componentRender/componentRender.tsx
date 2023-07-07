import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { baseTheme } from "../../../../app/styles/theme";
import { ThemeProvider } from "styled-components";

export function componentRender(component: ReactNode) {
  return render(<ThemeProvider theme={baseTheme}>{component}</ThemeProvider>);
}
