import styled from "styled-components";

export const ListItem = styled.li`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;
