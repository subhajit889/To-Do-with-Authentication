import React, { useState } from 'react';
import { useValue } from '../Context/context';
import "../Todostyles/todoitem.css"

const TodoItem = ({ todo, index }) => {
  const { removeTodo, todos, setTodos } = useValue();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editedText;
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="todo-grid">
    <div className="todo-item">
      <div className="todo-text">
        {todo.text}
      </div>
      <div className="todo-actions">
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="edit-input"
            />
            <button onClick={handleSave} className="save-button">
              Save
            </button>
            <button onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          </div>
        ) : (
          <>
            {!todo.completed && (
              <button onClick={handleEdit} className="edit-button">
                Modify
              </button>
            )}
            <button onClick={() => removeTodo(index)} className="delete-button">
              Delete
            </button>
          </>
        )}
      </div>
      <div className="todo-details">
        <span>
          {todo.dateAdded && `Added on : ${todo.dateAdded}`}{' '}
        </span>
        <span>
          {todo.completed && todo.dateCompleted && `Completed: ${todo.dateCompleted}`}
        </span>
      </div>
      {!todo.completed && (
        <button
          onClick={() => {
            const updatedTodos = [...todos];
            updatedTodos[index].completed = true;
            updatedTodos[index].dateCompleted = new Date().toLocaleString();
            setTodos(updatedTodos);
          }}
          className="mark-complete-button"
        >
          Mark as Complete
        </button>
      )}
    </div>
    </div>
  );
};

export default TodoItem;
