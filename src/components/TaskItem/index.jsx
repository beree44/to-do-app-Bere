import Button from '../Button';

const TaskItem = ({ text, isCompleted, onDelete, onToggle }) => {
  return (
    <li className="todo-item">
      {/* Checkbox para tachar */}
      <input 
        type="checkbox" 
        checked={isCompleted} 
        onChange={onToggle} 
      />
      
      {/* Texto de la tarea */}
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {text}
      </span>
      
      {/* Botón de eliminar */}
      <Button onClick={onDelete}>🗑️</Button>
    </li>
  );
};

export default TaskItem;