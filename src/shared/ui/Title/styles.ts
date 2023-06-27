import styled from "styled-components";
import { TextAlign } from "./Title";

interface TitleProps {
  isUppercase?: boolean;
  align?: TextAlign;
}

export const Title = styled.h1<TitleProps>`
  text-transform: ${(props) => (props.isUppercase ? "uppercase" : "none")};
  text-align: ${(props) => props.align};
`;
