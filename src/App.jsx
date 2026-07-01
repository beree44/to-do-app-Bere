function App() {
  return (
    <div className="todo-container">
      <h1>Lista de Tareas de Bere</h1>
      
      {/* Sección de entrada */}
      <div className="input-section">
        <input type="text" placeholder="Escribe una nueva tarea..." />
        <button>ADD</button>
      </div>

      {/* Lista de tareas */}
<ul className="todo-list">
  <li className="todo-item">
    <input type="checkbox" />
    <span>Task N</span>
    <button>🗑️</button>
    
  </li>
  <li className="todo-item">
    <input type="checkbox" />
    <span>Task N-1</span>
    <button>🗑️</button>
  </li>
  <li className="todo-item">
    <input type="checkbox" defaultChecked /> {/* Tarea marcada como completada */}
    <span>Completed Task N-2</span>
    <button>🗑️</button>
  </li>
  <li className="todo-item">
    <input type="checkbox" />
    <span>Task K</span>
    <button>🗑️</button>
  </li>
  <li className="todo-item">
    <input type="checkbox" />
    <span>Task 2</span>
    <button>🗑️</button>
  </li>
  <li className="todo-item">
    <input type="checkbox" defaultChecked />
    <span>Completed Task 1</span>
    <button>🗑️</button>
  </li>
</ul>
        
    </div>
  );
}

export default App;