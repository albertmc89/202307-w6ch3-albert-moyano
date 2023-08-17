import { toDosMock } from "../../mocks/mockData";
import {
  addToDoActionCreator,
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

  describe("When it receives a state with two ts and delete toDo action with the id 2", () => {
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

  describe("When it receives a state with two toDos and addToDo action", () => {
    test("Then it should return a new state with the toDos with id 3 added", () => {
      const currentToDosState: ToDoState = {
        toDos: toDosMock,
      };

      const toDoToAdd = {
        id: 3,
        name: "work",
        isDone: true,
      };

      const addtoDoAction = addToDoActionCreator(toDoToAdd);

      const newBugState = toDosReducer(currentToDosState, addtoDoAction);

      expect(newBugState.toDos).toContain(toDoToAdd);
    });
  });
});
