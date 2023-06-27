import styled from "styled-components";
import { Label } from "../Label/styles";

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  flex-direction: column-reverse;
`;

export const Input = styled.input`
  padding: 12px;
  height: 40px;
  outline: 1px solid ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  min-width: 300px;

  &:hover + ${Label} {
    color: ${({ theme }) => theme.colors.secondaryHover};
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.secondaryHover};
  }

  &:focus,
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  &:focus + ${Label}, &:focus-visible + ${Label} {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
