
import Button from './components/Button';
import TaskItem from './components/TaskItem';

function App() {
  return (
    <div className="todo-container">
      <h1>Lista de Tareas de Bere</h1>
      
      {/* Sección de entrada */}
      <div className="input-section">
        <input type="text" placeholder="Escribe una nueva tarea..." />
        <Button>ADD</Button>
      </div>

      {/* Lista de tareas */}
      <ul className="todo-list">
        <TaskItem text="Task N" isCompleted={false} />
        <TaskItem text="Task N-1" isCompleted={false} />
        <TaskItem text="Completed Task N-2" isCompleted={true} />
        <TaskItem text="Task K" isCompleted={false} />
        <TaskItem text="Task 2" isCompleted={false} />
        <TaskItem text="Completed Task 1" isCompleted={true} />
      </ul>
    </div>
  );
}

export default App;