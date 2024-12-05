import React, { useState } from "react";
import "./styles/App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // Función para agregar una tarea
  const addTask = (task) => {
    setTasks([...tasks, { id: uuidv4(), text: task, completed: false }]);
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Función para editar una tarea
  const editTask = (id, newText) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="App">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
