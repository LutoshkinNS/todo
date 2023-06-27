import styled from "styled-components";

export const Button = styled.button`
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontSecondary};
  min-width: 150px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }
`;
