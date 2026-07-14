import Button from '../Button';

const TaskItem = ({ text, isCompleted, onDelete, onToggle }) => {
  return (
    <li className="todo-item">
      {/* Checkbox */}
      <input 
        type="checkbox" 
        checked={isCompleted} 
        onChange={onToggle} 
      />
      
      {/* Texto de la tarea */}
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {text}
      </span>
      
      {/* Contenedor de botones con las clases correctas */}
      <div className="button-group">
  <Button className="icon-button" onClick={() => alert("Editar")}>🖊️</Button>
  <Button className="icon-button" onClick={() => alert("Compartir")}>↳ ↰</Button>
  <Button className="icon-button" onClick={onDelete}>🗑</Button>
</div>
    </li>
  );
};

export default TaskItem;