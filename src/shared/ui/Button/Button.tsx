import { ButtonHTMLAttributes, FormEvent, memo } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
}

export const Button = memo((props: ButtonProps) => {
  const { onClick, children, ...otherProps } = props;

  return <S.Button onClick={onClick} {...otherProps}>{children}</S.Button>;
});
