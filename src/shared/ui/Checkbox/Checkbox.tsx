import { ChangeEvent, forwardRef, InputHTMLAttributes, memo, Ref } from "react";
import { Label } from "../Label";
import * as S from "./styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const Checkbox = memo(
  forwardRef((props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const { id, checked, onChange, label, ...otherProps } = props;

    return (
      <S.Checkbox>
        <S.Input
          ref={ref}
          type="checkbox"
          id={String(id)}
          checked={checked}
          onChange={onChange}
          {...otherProps}
        />
        <Label htmlFor={String(id)}>
          {label}
          <S.Indicator />
        </Label>
      </S.Checkbox>
    );
  }),
);
