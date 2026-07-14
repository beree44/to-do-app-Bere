import { useState, useEffect } from 'react';
import Button from './components/Button';
import TaskItem from './components/TaskItem';
import './styles/main.scss';

function App() {
 
 //  Los estados (hooks)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks-de-bere');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState('');

  // Los efectos (hooks)
  useEffect(() => {
    localStorage.setItem('tasks-de-bere', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = { id: Date.now(), text: inputValue, isCompleted: false };
    setTasks([newTask, ...tasks]); 
    setInputValue('');
  };

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  return (
    <div className="todo-container">
      {/* El header ahora toma el estilo de tu _header.scss */}
      <header className="app-header">LISTA DE TAREAS DE BERE</header>
      
      <div className="divider"></div>
      
      {/* Aplicamos la clase add-task-container que definimos en _add-task.scss */}
      <div className="add-task-container">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una nueva tarea..." 
        />
        {/* Aquí pasamos la clase icon-button para que el botón sea cuadrado */}
        <Button className="icon-button" onClick={addTask}>✓</Button>
      </div>
 
      <ul className="todo-list">
        {tasks.length === 0 ? (
          <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>No hay tareas pendientes</p>
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