import { Task } from "../../../entities/task";
import { getTime } from "../../../shared/libs/helpers/dateHelper";

export function get(items?: number): Array<Task> {
  const count = items || 3;

  const result = [];

  for (let i = 0; i < count; i++) {
    const date = getTime() + i;
    const item = "Item" + i;
    const completed = Boolean(Math.round(Math.random()));

    result.push({
      id: date,
      item: item,
      completed: completed,
    });
  }

  return result;
}

export const toggleStatusCompleted = (state: Task[], task: Task) => {
  return state.map((stateI) => {
    if (stateI.id === task.id) {
      return {
        ...stateI,
        completed: !stateI.completed,
      };
    }
    return stateI;
  });
};

export const toggleAllStatusCompleted = (state: Task[], completed: boolean) => {
  return state.map((item) => ({ ...item, completed: completed }));
};

export const countCompletedTasks = (state: Task[]) => {
  return state.filter((i) => i.completed).length;
};
