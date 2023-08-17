import { toDosMock } from "../../mocks/mockData";
import {
  deleteToDoActionCreator,
  loadToDosActionCreator,
  toDosReducer,
} from "./toDosSlice";
import { ToDoState } from "./types";

describe("Given a toDosReducer reducer", () => {
  describe("When it receives a load toDos action with two toDos", () => {
    test("Then it should return a new state with the received two toDos", () => {
      const currentToDosState: ToDoState = {
        toDos: [],
      };
      const toDos = toDosMock;

      const loadToDosAction = loadToDosActionCreator(toDos);

      const newToDoState = toDosReducer(currentToDosState, loadToDosAction);

      expect(newToDoState).toHaveProperty("toDos", toDos);
    });
  });

  describe("When it receives a state with two toDos and delete toDo action with the id 2", () => {
    test("Then it should return a new state without the toDo with id 2", () => {
      const currentToDosState: ToDoState = {
        toDos: [],
      };

      const toDoToDelete = currentToDosState.toDos.find(
        ({ id }) => id !== toDoToDeleteId,
      );
      const toDoToDeleteId = 2;
      const deleteToDoAction = deleteToDoActionCreator(toDoToDeleteId);

      const newToDoState = toDosReducer(currentToDosState, deleteToDoAction);

      expect(newToDoState.toDos).not.toContain(toDoToDelete);
    });
  });
});
