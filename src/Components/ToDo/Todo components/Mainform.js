import React from 'react';
import { useValue } from '../Context/context';
import '../Todostyles/mainform.css'

const MainForm = () => {
  const { todoText, setTodoText, addTodo } = useValue();

  return (
    <div className="main-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') addTodo();
        }}
      />
      <button className="add-button" onClick={addTodo}>
        Add To-Do
      </button>
    </div>
  );
};

export default MainForm;
