import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../../types";
import { ToDoState as ToDosState } from "./types";

const initialToDosState: ToDosState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: "toDos",
  initialState: initialToDosState,
  reducers: {
    loadToDos: (
      _currentToDosState,
      action: PayloadAction<ToDo[]>,
    ): ToDosState => ({
      toDos: action.payload,
    }),
    deleteToDo: (
      currentToDosState,
      action: PayloadAction<number>,
    ): ToDosState => ({
      toDos: currentToDosState.toDos.filter(
        (toDo) => toDo.id !== action.payload,
      ),
    }),
    addToDo: (
      currentAddToDoState,
      action: PayloadAction<ToDo>,
    ): ToDosState => ({
      toDos: [...currentAddToDoState.toDos, action.payload],
    }),
  },
});

export const toDosReducer = toDosSlice.reducer;
export const {
  loadToDos: loadToDosActionCreator,
  deleteToDo: deleteToDoActionCreator,
  addToDo: addToDoActionCreator,
} = toDosSlice.actions;
