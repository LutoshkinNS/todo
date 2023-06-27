import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.fontSecondary};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }
`;
