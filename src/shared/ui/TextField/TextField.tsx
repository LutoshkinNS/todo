import { InputHTMLAttributes, memo } from "react";
import { Label } from "../Label";
import * as S from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField = memo((props: TextFieldProps) => {
  const { id, value, onChange, label, ...otherProps } = props;

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
      <Label htmlFor={String(id)}>{label}</Label>
    </S.Wrapper>
  );
});
