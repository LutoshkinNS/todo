import { createGlobalStyle } from "styled-components";
import { baseTheme } from "./theme";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font: ${baseTheme.font.main};
    color: ${baseTheme.colors.font};
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }
  `;
