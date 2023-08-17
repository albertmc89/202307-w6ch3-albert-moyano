import { ToDo } from "../../types";
import { deleteToDo, loadToDosActionCreator, toDosReducer } from "./toDosSlice";
import { ToDoState } from "./types";

describe("Given a toDosReducer reducer", () => {
  describe("When it receives a load toDos action with two ToDos", () => {
    test("Then it should return a new state with the received two ToDos", () => {
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

  describe("When it receives a state with two ToDos and delete ToDo action with the id 2", () => {
    test("Then it should return a new state without the ToDo with id 2", () => {
      const currentToDosState: ToDoState = {
        toDos: [],
      };

      const toDoToDeleteId = 2;
      const deleteToDoAction = deleteToDo(toDoToDeleteId);

      const newToDoState = toDosReducer(currentToDosState, deleteToDoAction);

      expect(newToDoState).not.toContain;
    });
  });
});
