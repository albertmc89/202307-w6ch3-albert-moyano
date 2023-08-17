import { ToDo } from "../../types";
import "./ToDoCard.css";

interface ToDoCardProps {
  toDo: ToDo;
}

const ToDoCard = ({ toDo: { name } }: ToDoCardProps): React.ReactElement => {
  return (
    <article className="todo">
      <h2>{name}</h2>
      <div className="button-container">
        <button className="button">Done</button>
        <button className="button">Delete</button>
      </div>
    </article>
  );
};

export default ToDoCard;
