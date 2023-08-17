import { useAppSelector } from "../../store";
import ToDoCard from "../ToDo/ToDoCard";

const ToDosList = (): React.ReactElement => {
  const toDos = useAppSelector((state) => state.toDosState.toDos);

  return (
    <>
      <h2>ToDo list:</h2>
      <ul className="todos-list">
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDoCard toDo={toDo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDosList;
