
import Button from '../Button';

const TaskItem = ({ text, isCompleted }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" defaultChecked={isCompleted} />
      <span>{text}</span>
      <Button>🗑️</Button>
    </li>
  );
};

export default TaskItem;