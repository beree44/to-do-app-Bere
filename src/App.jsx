import { useState } from 'react';
import Button from './components/Button';
import TaskItem from './components/TaskItem';
import './styles/App.css';

function App() {
  // Estado para la lista de tareas y para lo que escribes en el input
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Lógica: Guardar tarea
  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = { 
      id: Date.now(), 
      text: inputValue, 
      isCompleted: false 
    };
    // Se agrega al principio para orden cronológico inverso
    setTasks([newTask, ...tasks]); 
    setInputValue('');
  };

  // Lógica: Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Lógica: Tachar tarea (toggle)
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  return (
    <div className="todo-container">
      <h1>LISTA DE TAREAS DE BERE</h1>
      
      {/* Sección de entrada */}
      <div className="input-section">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una nueva tarea..." 
        />
        <Button onClick={addTask}>ADD</Button>
      </div>

      {/* Lista de tareas */}
      <ul className="todo-list">
        {tasks.length === 0 ? (
          <p>No hay tareas pendientes</p>
        ) : (
          tasks.map(task => (
            <TaskItem 
              key={task.id} 
              text={task.text} 
              isCompleted={task.isCompleted}
              onDelete={() => deleteTask(task.id)}
              onToggle={() => toggleTask(task.id)}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;