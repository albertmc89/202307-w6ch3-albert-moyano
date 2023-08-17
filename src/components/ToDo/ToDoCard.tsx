import { ToDo } from "../../types";

interface ToDoCardProps {
  toDo: ToDo;
}

const ToDoCard = ({ toDo: { name } }: ToDoCardProps): React.ReactElement => {
  return (
    <article className="todo">
      <h2>{name}</h2>
      <button>Done</button>
      <button className="deleteButton">Delete</button>
    </article>
  );
};

export default ToDoCard;
