import { ToDo } from "../../types";
import { loadToDosActionCreator, toDosReducer } from "./toDosSlice";
import { ToDoState } from "./types";

describe("Given a toDosReducer reducer", () => {
  describe("When it receives a load toDos action with two tasks", () => {
    test("Then it should return a new state with the received two tasks", () => {
      const currentToDosState: ToDoState = {
        toDos: [],
      };
      const toDos: ToDo[] = [
        {
          id: 1,
          name: "prueba",
          isDone: true,
        },
        {
          id: 2,
          name: "prueba2",
          isDone: false,
        },
      ];

      const loadToDosAction = loadToDosActionCreator(toDos);

      const newToDoState = toDosReducer(currentToDosState, loadToDosAction);

      expect(newToDoState).toHaveProperty("toDos", toDos);
    });
  });
});
