import { LabelHTMLAttributes, memo } from "react";
import * as S from "./styles";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = memo((props: LabelProps) => {
  return <S.Label data-testid="label" {...props}></S.Label>;
});
