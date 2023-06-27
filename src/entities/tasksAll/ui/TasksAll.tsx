import { ChangeEvent, memo, useEffect, useRef } from "react";
import { Checkbox } from "../../../shared/ui/Checkbox";

interface TasksAllProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  countCheckedTasks: number;
  countAllTasks: number;
}

export const TasksAll = memo((props: TasksAllProps) => {
  const { onChange, countAllTasks, countCheckedTasks } = props;
  const checkboxAllRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const checkbox = checkboxAllRef.current;

    if (checkbox) {
      if (countCheckedTasks === 0) {
        checkbox.indeterminate = false;
        checkbox.checked = false;
      } else if (countCheckedTasks === countAllTasks) {
        checkbox.indeterminate = false;
        checkbox.checked = true;
      } else if (countCheckedTasks < countAllTasks) {
        checkbox.indeterminate = true;
        checkbox.checked = false;
      }
    }
  }, [countAllTasks, countCheckedTasks]);

  if (checkboxAllRef) {
    return (
      <Checkbox
        ref={checkboxAllRef}
        id="checkboxAll"
        onChange={(e) => {
          onChange(e);
        }}
        label={`Completed ${countCheckedTasks} of ${countAllTasks}`}
      />
    );
  }
  return <></>;
});
