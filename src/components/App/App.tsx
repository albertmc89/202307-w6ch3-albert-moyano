import { useEffect } from "react";
import { toDosData } from "../../data";
import { useAppDispatch } from "../../store";
import { loadToDosActionCreator } from "../../store/toDos/toDosSlice";
import ToDosList from "../ToDosList/ToDosList";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadToDosActionCreator(toDosData));
  });

  return (
    <>
      <div className="container">
        <ToDosList />
      </div>
    </>
  );
};

export default App;
