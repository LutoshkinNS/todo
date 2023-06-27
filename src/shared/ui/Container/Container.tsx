import { memo, ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
}

export const Container = memo((props: ContainerProps) => {
  const { children } = props;

  return <StyledContainer>{children}</StyledContainer>;
});

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 15px;
  min-height: 100vh;
`;
