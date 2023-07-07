import { memo, useCallback } from "react";
import { Task } from "../../model/types/task";
import { Checkbox } from "../../../../shared/ui/Checkbox";
import { CloseBtn } from "../../../../shared/ui/CloseBtn";
import * as S from "./styles";

interface TaskItemProps {
  task: Task;
  onChange: (task: Task) => void;
  onRemove: (task: Task) => void;
}

export const TaskItem = memo((props: TaskItemProps) => {
  const { task, onChange, onRemove } = props;

  const handleChange = useCallback(() => onChange(task), [onChange, task]);
  const handleRemove = useCallback(() => onRemove(task), [onRemove, task]);

  return (
    <S.ListItem data-testid="TaskItem">
      <S.ContentWrapper>
        <Checkbox
          data-testid="itemCheckbox"
          id={String(task.id)}
          onChange={handleChange}
          checked={task.completed}
          label={task.item}
        />
      </S.ContentWrapper>
      <S.Close>
        <CloseBtn onClick={handleRemove} />
      </S.Close>
    </S.ListItem>
  );
});
