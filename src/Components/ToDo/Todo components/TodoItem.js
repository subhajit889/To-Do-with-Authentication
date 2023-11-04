import React, { useState } from 'react';
import { useValue } from '../Context/context';

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
    <div>
      <div >
        <div>{todo.text}</div>
        <div>
          {isEditing ? (
            <div>
                <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={handleSave}>
                Save
              </button>
              <button onClick={handleCancel}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              {!todo.completed && (
                <button onClick={handleEdit} >
                  Modify
                </button>
              )}
              <button onClick={() => removeTodo(index)} >
                Delete
              </button>
            </>
          )}
        </div>
        <div>
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
          >
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;