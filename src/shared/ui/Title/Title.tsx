import { HTMLAttributes, memo } from "react";
import * as S from "./styles";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TextAlign = "right" | "left" | "center";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  tag?: Tag;
  children: string;
  isUppercase?: boolean;
  align?: TextAlign;
}

export const Title = memo((props: TitleProps) => {
  const {
    tag = "h1",
    children,
    isUppercase = false,
    align = "left",
    ...otherProps
  } = props;

  const Tag = S.Title.withComponent(tag);

  return (
    <Tag isUppercase={isUppercase} align={align} {...otherProps}>
      {children}
    </Tag>
  );
});
