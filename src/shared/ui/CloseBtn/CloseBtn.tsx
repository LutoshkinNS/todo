import { memo } from "react";
import * as S from "./styles";

interface CloseBtnProps {
  onClick: () => void;
}

export const CloseBtn = memo((props: CloseBtnProps) => {
  const { onClick } = props;

  return <S.Wrapper onClick={onClick}>x</S.Wrapper>;
});
