import React from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
