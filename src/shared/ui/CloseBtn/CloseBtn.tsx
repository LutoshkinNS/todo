import { memo } from "react";
import * as S from "./styles";

interface CloseBtnProps {
  onClick: () => void;
}

export const CloseBtn = memo((props: CloseBtnProps) => {
  const { onClick, ...otherProps } = props;

  return (
    <S.Wrapper onClick={onClick} data-testid="CloseBtn" {...otherProps}>
      x
    </S.Wrapper>
  );
});
