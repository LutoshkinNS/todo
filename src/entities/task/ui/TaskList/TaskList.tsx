import { memo, ReactNode } from "react";
import * as S from "./styles";

interface TaskItemProps {
  children: ReactNode;
}

export const TaskList = memo((props: TaskItemProps) => {
  const { children } = props;

  return <S.List data-testid="TaskList">{children}</S.List>;
});
