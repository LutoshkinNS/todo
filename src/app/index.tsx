import { MainPage } from "../pages/MainPage";
import "normalize.css";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <MainPage />
      <GlobalStyles />
    </ThemeProvider>
  );
}
