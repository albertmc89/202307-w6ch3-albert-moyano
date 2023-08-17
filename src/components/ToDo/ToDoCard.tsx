import { useDispatch } from "react-redux";
import { deleteToDoActionCreator } from "../../store/toDos/toDosSlice";
import { ToDo } from "../../types";
import "./ToDoCard.css";

interface ToDoCardProps {
  toDo: ToDo;
}

const ToDoCard = ({
  toDo: { name, id },
}: ToDoCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const deleteToDo = () => {
    dispatch(deleteToDoActionCreator(id));
  };
  return (
    <article className="todo">
      <h2>{name}</h2>
      <div className="button-container">
        <button className="button">Done</button>
        <button className="button" onClick={deleteToDo}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default ToDoCard;
