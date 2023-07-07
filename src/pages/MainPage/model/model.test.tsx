import {countCompletedTasks, get, toggleAllStatusCompleted, toggleStatusCompleted} from "./model";

describe("ModelMainPage get()", () => {
  test("get с аргументом 1 возвращает массив элементов с длинной 3", () => {
    expect(get(1).length).toBe(1)
  });

  test("get с аргументом 0 возвращает 3", () => {
    expect(get(0).length).toBe(3)
  });

  test("get без аргумента возвращает 3", () => {
    expect(get().length).toBe(3)
  });

  test("get без аргумента возвращает 3", () => {
    expect(get().length).toBe(3)
  });

  test("get возвращает объект с типом Task", () => {
    get(3).forEach((item) => {
      expect(item).toHaveProperty('id')
      expect(typeof item.id).toBe('number')
      expect(item).toHaveProperty('item')
      expect(typeof item.item).toBe('string')
      expect(item).toHaveProperty('completed')
      expect(typeof item.completed).toBe('boolean')
    })
  });

  test("get возвращает объект с разными id", () => {
    const ids = new Set()
    const state = get(3)
    const length = state.length
    state.forEach((item) => {
      ids.add(item.id)
    })
    expect(ids.size).toBe(length)

  });
});

describe("ModelMainPage toggleStatusCompleted()", () => {
  test("toggleStatusCompleted изменяет completed переданной задачи", () => {
    const state = get(2)
    const newState = toggleStatusCompleted(state, state[0])
    expect(newState[0].completed).toBe(!state[0].completed)
  });

  test("toggleStatusCompleted ничего не изменяет если не найдена задача в списке задач", () => {
    const state = get(2)
    const task = {
      id: 1,
      item: 'test',
      completed: false
    }
    const newState = toggleStatusCompleted(state, task)
    expect(state).toEqual(newState)
  });
});

describe("ModelMainPage toggleAllStatusCompleted()", () => {
  test("toggleAllStatusCompleted изменяет все completed на true", () => {
    const state = get(2)
    const newState = toggleAllStatusCompleted(state, true)
    newState.forEach((item) => {
      expect(item.completed).toBe(true)
    })
  });

  test("toggleAllStatusCompleted изменяет все completed на false", () => {
    const state = get(2)
    const newState = toggleAllStatusCompleted(state, false)
    newState.forEach((item) => {
      expect(item.completed).toBe(false)
    })
  });
});

describe("ModelMainPage countCompletedTasks()", () => {
  test("количество выполненных задач = 1", () => {
    const state = [
      {
        id: 1,
        item: 'test1',
        completed: false
      },
      {
        id: 2,
        item: 'test2',
        completed: true
      }
    ]
    const countCompleted = countCompletedTasks(state)
    expect(countCompleted).toBe(1)
  });

  test("количество выполненных задач = 2", () => {
    const state = [
      {
        id: 1,
        item: 'test1',
        completed: true
      },
      {
        id: 2,
        item: 'test2',
        completed: true
      }
    ]
    const countCompleted = countCompletedTasks(state)
    expect(countCompleted).toBe(2)
  });

  test("количество выполненных задач = 0", () => {
    const state = [
      {
        id: 1,
        item: 'test1',
        completed: false
      },
      {
        id: 2,
        item: 'test2',
        completed: false
      }
    ]
    const countCompleted = countCompletedTasks(state)
    expect(countCompleted).toBe(0)
  });
});
