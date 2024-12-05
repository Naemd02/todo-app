import React, { useState } from "react";
import "../styles/TaskItem.css";

const TaskItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="save-button" onClick={handleEdit}>
            Save
          </button>
        </div>
      ) : (
        <span>{task.text}</span>
      )}
      
      {/* Delete Button with Font Awesome Icon */}
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        <i className="fa fa-trash"></i> Delete
      </button>

      {/* Edit Button */}
      {!isEditing && (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          <i className="fa fa-pencil"></i> Edit
        </button>
      )}
    </li>
  );
};

export default TaskItem;
